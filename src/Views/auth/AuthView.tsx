/* import React, { useState, useEffect } from 'react';
import '../../Components/Css/Custom.css'
import { useAuth } from '../../Services/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Swal from 'sweetalert2'
import * as userService from '../../Services/Api/UsersService'

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


  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: 'No fue ingresado ningun correo'
      })
      return false
    }
    if (!password) {
      Swal.fire({
        title: 'No fue ingresada ninguna contraseña'
      })
      return false
    }
    const user = {
      email: email,
      password: password
    }
    const res = await userService.getUserByMail(user);
    await login(email, password);
    console.log('respuesta: ',res)
    if (res.data.rolename == 'Administrador') {
      navigate('/administrador/dashboard');
      return 'administrador';
    } else {
      navigate('/estudiantes/dashboard');
      return 'estudiante'
    }
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
          <form className="formulario__login active">
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Correo Electronico" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className='login-btn login' onClick={handleSubmitLogin}>Entrar</button>
            <button type="button" className='login-btn google' onClick={handleGoogleLogin}>
              Iniciar Sesión con Google
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

export default Auth; */


import React, { useState, useEffect } from 'react';
import '../../Components/Css/Custom.css'
import { useAuth } from '../../Services/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Swal from 'sweetalert2'
import * as userService from '../../Services/Api/UsersService'
import GoogleIcon from '@mui/icons-material/Google';



const Auth: React.FC = () => {

  const { login, googleLogin, facebookLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const iniciarSesion = () => {
      if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
      } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
      }
    };

    const register = () => {
      if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
      } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
      }
    };

    const anchoPage = () => {
      if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
      } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
      }
    };

    const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
    const btnRegistrarse = document.getElementById("btn__registrarse");
    const formulario_login = document.querySelector(".formulario__login") as HTMLElement;
    const formulario_register = document.querySelector(".formulario__register") as HTMLElement;
    const contenedor_login_register = document.querySelector(".contenedor__login-register") as HTMLElement;
    const caja_trasera_login = document.querySelector(".caja__trasera-login") as HTMLElement;
    const caja_trasera_register = document.querySelector(".caja__trasera-register") as HTMLElement;

    btnIniciarSesion?.addEventListener("click", iniciarSesion);
    btnRegistrarse?.addEventListener("click", register);
    window.addEventListener("resize", anchoPage);

    anchoPage();

    return () => {
      btnIniciarSesion?.removeEventListener("click", iniciarSesion);
      btnRegistrarse?.removeEventListener("click", register);
      window.removeEventListener("resize", anchoPage);
    };
  }, []);

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


  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: 'No fue ingresado ningun correo'
      })
      return false
    }
    if (!password) {
      Swal.fire({
        title: 'No fue ingresada ninguna contraseña'
      })
      return false
    }
    const user = {
      email: email,
      password: password
    }
    const res = await userService.getUserByMail(user);
    await login(email, password);
    console.log('respuesta: ', res)
    if (res.data.rolename == 'Administrador') {
      navigate('/administrador/dashboard');
      return 'administrador';
    } else {
      navigate('/estudiantes/dashboard');
      return 'estudiante'
    }
  };

  const handleSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí debes implementar la lógica de registro
    console.log("Registrado");
  };

  return (
    <main>
      <div className="contenedor__todo">
        <div className="caja__trasera">
          <div className="caja__trasera-login">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar en la página</p>
            <button id="btn__iniciar-sesion">Iniciar Sesión</button>
          </div>
          <div className="caja__trasera-register">
            <h3>¿Aún no tienes una cuenta?</h3>
            <p>Regístrate para que puedas iniciar sesión</p>
            <button id="btn__registrarse">Regístrarse</button>
          </div>
        </div>

        <div className="contenedor__login-register">
          <form action="" className="formulario__login">
            <h2>Iniciar Sesión</h2>
            <label htmlFor="correo" className="input-label">Correo Electronico</label>
            <input type="text" id="correo" placeholder="correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password" className="input-label">Contraseña</label>
            <input type="password" id="password" placeholder="**********" onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="forgot-password" className="forgot-password">Olvidaste contraseña? Recuperala</label>
            <button type="submit" className="button-primary" onClick={handleSubmitLogin}>Entrar</button>
            <button type="button" className="button-white" onClick={handleGoogleLogin}>
              <span className="button-content">
                <GoogleIcon style={{ marginRight: '8px' }} />
                Iniciar Sesión con Google
              </span>
            </button>
          </form>
          <form action="" className="formulario__register">
            <h2>Regístrarse</h2>
            <label htmlFor="nombre" className="input-label">Nombre completo</label>
            <input type="text" id="nombre" placeholder="John Doe" />
            <label htmlFor="correo" className="input-label">Correo Electronico</label>
            <input type="text" id="correo" placeholder="correo@ejemplo.com" />
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="experiencia" className="input-label">Experiencia</label>
                <input type="text" id="experiencia" placeholder="Años" />
              </div>
              <div className="input-container">
                <label htmlFor="edad" className="input-label">Edad</label>
                <input type="text" id="edad" placeholder="Años" />
              </div>
            </div>
            <label htmlFor="password" className="input-label">Contraseña</label>
            <input type="password" id="password" placeholder="**********" />
            <label htmlFor="password_confirm" className="input-label">Confirmar Contraseña</label>
            <input type="password" id="password_confirm" placeholder="**********" />
            <button>Regístrarse</button>
          </form>

        </div>
      </div>
    </main>
  );
};

export default Auth;
