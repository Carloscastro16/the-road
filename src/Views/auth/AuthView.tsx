import React, { useEffect } from 'react';
import '../../Components/Css/Custom.css';

const LoginRegister: React.FC = () => {

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
            <input type="text" id="correo" placeholder="correo@ejemplo.com" />
            <label htmlFor="password" className="input-label">Contraseña</label>
            <input type="password" id="password" placeholder="**********" />
            <label htmlFor="forgot-password" className="forgot-password">Olvidaste contraseña? Recuperala</label>
            <button>Entrar</button>
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

export default LoginRegister;
