import React, { useState, useEffect } from 'react';
import '../../Components/Css/Custom.css';
import { useAuth } from '../../Services/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

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
    setIsLogin(true);
    if (window.innerWidth > 850) {
      document.querySelector('.formulario__login')!.classList.add('active');
      document.querySelector('.formulario__register')!.classList.remove('active');
      document.querySelector('.contenedor__login-register')!.setAttribute('style', 'left: 10px;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'opacity: 1;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'opacity: 0;');
    } else {
      document.querySelector('.formulario__login')!.classList.add('active');
      document.querySelector('.formulario__register')!.classList.remove('active');
      document.querySelector('.formulario__login')!.setAttribute('style', 'display: block;');
      document.querySelector('.formulario__register')!.setAttribute('style', 'display: none;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'display: block;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'display: none;');
    }
  };

  const handleRegister = () => {
    setIsLogin(false);
    if (window.innerWidth > 850) {
      document.querySelector('.formulario__register')!.classList.add('active');
      document.querySelector('.formulario__login')!.classList.remove('active');
      document.querySelector('.contenedor__login-register')!.setAttribute('style', 'left: 410px;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'opacity: 0;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'opacity: 1;');
    } else {
      document.querySelector('.formulario__register')!.classList.add('active');
      document.querySelector('.formulario__login')!.classList.remove('active');
      document.querySelector('.formulario__register')!.setAttribute('style', 'display: block;');
      document.querySelector('.formulario__login')!.setAttribute('style', 'display: none;');
      document.querySelector('.caja__trasera-register')!.setAttribute('style', 'display: none;');
      document.querySelector('.caja__trasera-login')!.setAttribute('style', 'display: block; opacity: 1;');
    }
  };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/estudiantes/dashboard');
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
            <button onClick={handleLogin} id="btn__iniciar-sesion">Iniciar Sesión</button>
          </div>
          <div className="caja__trasera-register">
            <h3>¿Aún no tienes una cuenta?</h3>
            <p>Regístrate para que puedas iniciar sesión</p>
            <button onClick={handleRegister} id="btn__registrarse">Registrarse</button>
          </div>
        </div>
        <div className="contenedor__login-register">
          <form onSubmit={handleSubmitLogin} className="formulario__login active">
            <h2>Iniciar Sesión</h2>
            <label htmlFor="login-email">Correo Electrónico</label>
            <input id="login-email" type="text" placeholder="Correo Electrónico" />
            <label htmlFor="login-password">Contraseña</label>
            <input id="login-password" type="password" placeholder="**********" />
            <button type="submit">Entrar</button>
          </form>
          <form onSubmit={handleSubmitRegister} className="formulario__register">
            <h2>Únete</h2>
            <label htmlFor="register-name">Nombre</label>
            <input id="register-name" type="text" placeholder="Nombre" />
            <label htmlFor="register-email">Correo</label>
            <input id="register-email" type="text" placeholder="Correo" />
            <div className="input-group">
              <div>
                <label htmlFor="register-experience">Experiencia</label>
                <input id="register-experience" type="number" placeholder="Años" />
              </div>
              <div>
                <label htmlFor="register-age">Edad</label>
                <input id="register-age" type="number" placeholder="Edad" />
              </div>
            </div>
            <label htmlFor="register-password">Contraseña</label>
            <input id="register-password" type="password" placeholder="**********" />
            <label htmlFor="register-confirm-password">Confirmar Contraseña</label>
            <input id="register-confirm-password" type="password" placeholder="**********" />
            <button type="submit">Registrarte</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Auth;
