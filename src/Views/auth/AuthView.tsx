import React, { useState, useEffect } from 'react';
import '../../Components/Css/Custom.css'
import { useAuth } from '../../Services/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { RenderFacebookLogin } from '../../Services/Auth/Facebook';

const Auth: React.FC = () => {
  const { login,googleLogin,facebookLogin  } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const anchoPage = () => {
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

    anchoPage();
    window.addEventListener('resize', anchoPage);

    return () => {
      window.removeEventListener('resize', anchoPage);
    };
  }, []);

  const handleLogin = () => {
    if (window.innerWidth > 850) {
      document.querySelector('.formulario__login')!.classList.add('active');
      document.querySelector('.formulario__register')!.classList.remove('active');
      document.querySelector('.contenedor__login-register')!.setAttribute('style', 'left: 10px;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'opacity: 1;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'opacity: 0;');
    } else {
      document.querySelector('.formulario__login')!.classList.add('active');
      document.querySelector('.formulario__register')!.classList.remove('active');
      document.querySelector('.contenedor__login-register')!.setAttribute('style', 'left: 0px;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'display: block;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'display: none;');
    }
  };

  const handleRegister = () => {
    if (window.innerWidth > 850) {
      document.querySelector('.formulario__register')!.classList.add('active');
      document.querySelector('.formulario__login')!.classList.remove('active');
      document.querySelector('.contenedor__login-register')!.setAttribute('style', 'left: 410px;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'opacity: 0;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'opacity: 1;');
    } else {
      document.querySelector('.formulario__register')!.classList.add('active');
      document.querySelector('.formulario__login')!.classList.remove('active');
      document.querySelector('.contenedor__login-register')!.setAttribute('style', 'left: 0px;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'display: none;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'display: block;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'opacity: 1;');
    }
  };
   const handleGoogleLogin = () => {
    googleLogin().then(() => {
      navigate('/estudiantes/dashboard');
    });
  };
  const handleFacebookLogin = () => {
    facebookLogin().then(() => {
      navigate('/estudiantes/dashboard');
    });
  };


  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email,password);
    navigate('/estudiantes/dashboard');
  };

  const handleSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí debes implementar la lógica de registro
    console.log("Registrado");
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="contenedor__todo">
        <div className="caja__trasera">
          <div className="caja__trasera-login">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar en la página</p>
            <button onClick={handleLogin} id="btn__iniciar-sesion">Iniciar Sesión</button>
          </div>
          <div className="caja__trasera-register">
            <h3>¿Aún no tienes una cuenta?</h3>
            <p>Regístrate para que puedas iniciar sesión</p>
            <button onClick={handleRegister} id="btn__registrarse">Regístrarse</button>
          </div>
        </div>
        <div className="contenedor__login-register">
          <form onSubmit={handleSubmitLogin} className="formulario__login active">
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Correo Electronico" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Entrar</button>
            <RenderFacebookLogin></RenderFacebookLogin>
            <button type="button" onClick={handleGoogleLogin}>
              Iniciar Sesión con Google
            </button>
            <button type="button" onClick={handleFacebookLogin}>
              Iniciar Sesión con facebook
            </button>
          </form>
          <form onSubmit={handleSubmitRegister} className="formulario__register">
            <h2>Únete</h2>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Correo" />
            <div className="input-group">
              <input type="number" placeholder="Experiencia" />
              <input type="number" placeholder="Edad" />
            </div>
            <input type="password" placeholder="Contraseña" />
            <input type="password" placeholder="Confirmar Contraseña" />
            <button type="submit">Registrarte</button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default Auth;
