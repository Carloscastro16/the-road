import ts from '../../../assets/Img/tsbanner.png'
import css from '../../../assets/Img/cssbanner.png'
import html from '../../../assets/Img/htmlbanner.png'
import js from '../../../assets/Img/javascriptbanner.png'
import python from '../../../assets/Img/pythonbanner.png'
import react from '../../../assets/Img/reactbanner.png'
const Presentacion = () =>{
    return (
        <div className="presentation-container">
          <div className="background-icons">
            <img src={js} alt="JS Icon" className="icon js-icon" />
            <img src={python} alt="Python Icon" className="icon python-icon" />
            <img src={html} alt="HTML Icon" className="icon html-icon" />
            <img src={css} alt="CSS Icon" className="icon css-icon" />
            <img src={ts} alt="TS Icon" className="icon ts-icon" />
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