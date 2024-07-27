import React, { useState, useEffect } from 'react';
import '../../Components/Css/Custom.css';
import { useAuth } from '../../Services/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import * as userService from '../../Services/Api/UsersService';

const LoginPage: React.FC = () => {
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [lastName, setlastName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [isLoginActive, setIsLoginActive] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 850);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const adjustView = () => {
      if (window.innerWidth > 850) {
        document.querySelector('.caja__trasera-register')!.setAttribute('style', 'display: block;');
        document.querySelector('.caja__trasera-login')!.setAttribute('style', 'display: block;');
      } else {
        document.querySelector('.caja__trasera-register')!.setAttribute('style', 'display: block; opacity: 1;');
        document.querySelector('.caja__trasera-login')!.setAttribute('style', 'display: none;');
        document.querySelector('.formulario__login')!.setAttribute('style', 'display: block;');
        document.querySelector('.contenedor__login-register')!.setAttribute('style', 'left: 0px;');
        document.querySelector('.formulario__register')!.setAttribute('style', 'display: none;');
      }
    };

    adjustView();
  }, [isMobile]);

  const handleLogin = () => {
    setIsLoginActive(true);
    if (isMobile) {
      document.querySelector('.formulario__login')!.setAttribute('style', 'display: block;');
      document.querySelector('.formulario__register')!.setAttribute('style', 'display: none;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'display: block;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'display: none;');
    } else {
      document.querySelector('.formulario__login')!.setAttribute('style', 'display: block;');
      document.querySelector('.formulario__register')!.setAttribute('style', 'display: none;');
      document.querySelector('.contenedor__login-register')!.setAttribute('style', 'left: 10px;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'opacity: 1;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'opacity: 0;');
    }
  };

  const handleRegister = () => {
    setIsLoginActive(false);
    if (isMobile) {
      document.querySelector('.formulario__register')!.setAttribute('style', 'display: block;');
      document.querySelector('.formulario__login')!.setAttribute('style', 'display: none;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'display: none;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'display: block; opacity: 1;');
    } else {
      document.querySelector('.formulario__register')!.setAttribute('style', 'display: block;');
      document.querySelector('.formulario__login')!.setAttribute('style', 'display: none;');
      document.querySelector('.contenedor__login-register')!.setAttribute('style', 'left: 410px;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'opacity: 0;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'opacity: 1;');
    }
  };

  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      navigate('/estudiantes/dashboard');
    });
  };

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({ title: 'No fue ingresado ningun correo' });
      return false;
    }
    if (!password) {
      Swal.fire({ title: 'No fue ingresada ninguna contraseña' });
      return false;
    }
    const user = { email, password };
    const res = await userService.getUserByMail(user);
    await login(email, password);
    if (res.data.rolename === 'Administrador') {
      navigate('/administrador/dashboard');
    } else {
      navigate('/estudiantes/dashboard');
    }
  };

  const handleSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({ title: 'No fue ingresado ningun correo' });
      return false;
    }
    if (!password) {
      Swal.fire({ title: 'No fue ingresada ninguna contraseña' });
      return false;
    }
    if (password !== confirmPassword) {
      Swal.fire({ title: 'Las contraseñas no coinciden' });
      return false;
    }
    const userData = { email, password, name, lastname: lastName, rolename: 'Estudiante', creationDate: new Date(), points: 0 };
    const res = await userService.createUser(userData);

    if (res.status === 200) {
      navigate('/login');
    } else {
      navigate('/');
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="contenedor__todo">
        <div className="caja__trasera">
          <div className="caja__trasera-login">
            <Typography variant="h3">¿Ya tienes una cuenta?</Typography>
            <Typography variant="body1">Inicia sesión para entrar en la página</Typography>
            <Button variant="contained" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
          </div>
          <div className="caja__trasera-register">
            <Typography variant="h3">¿Aún no tienes una cuenta?</Typography>
            <Typography variant="body1">Regístrate para que puedas iniciar sesión</Typography>
            <Button variant="contained" onClick={handleRegister}>
              Registrarse
            </Button>
          </div>
        </div>
        <div className="contenedor__login-register">
          <form className={`formulario__login ${isLoginActive ? 'active' : ''}`} onSubmit={handleSubmitLogin}>
            <Typography variant="h2">Iniciar Sesión</Typography>
            <Box sx={{ my: 2 }}>
              <TextField
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Box>
            <Button type="submit" variant="contained" fullWidth sx={{ mb: 2 }}>
              Entrar
            </Button>
            <Button variant="outlined" fullWidth onClick={handleGoogleLogin}>
              Iniciar Sesión con Google
            </Button>
          </form>
          <form className={`formulario__register ${isLoginActive ? '' : 'active'}`} onSubmit={handleSubmitRegister}>
            <Typography variant="h2">Únete</Typography>
            <Box sx={{ my: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Apellido"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setlastName(e.target.value)}
                />
              </Box>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Correo"
                variant="outlined"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                sx={{ my: 2 }}
              />
              <TextField
                label="Confirmar Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Box>
            <Button type="submit" variant="contained" fullWidth>
              Registrarte
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default LoginPage;