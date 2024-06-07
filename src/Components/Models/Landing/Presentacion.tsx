const Presentacion = () =>{
    return (
        <div className="presentation-container">
          <div className="background-icons">
            <img src="path/to/js-icon.png" alt="JS Icon" className="icon js-icon" />
            <img src="path/to/python-icon.png" alt="Python Icon" className="icon python-icon" />
            <img src="path/to/html-icon.png" alt="HTML Icon" className="icon html-icon" />
            <img src="path/to/css-icon.png" alt="CSS Icon" className="icon css-icon" />
            <img src="path/to/ts-icon.png" alt="TS Icon" className="icon ts-icon" />
          </div>
          <div className="content">
            <h1>Domina la programación</h1>
            <h2>Practica constantemente</h2>
            <p>Mejora tus habilidades de desarrollo entrenando continuamente con desafíos actuales y potencia tus habilidades.</p>
            <button className="join-button">Unirme</button>
          </div>
        </div>
      );
};

export default Presentacion;