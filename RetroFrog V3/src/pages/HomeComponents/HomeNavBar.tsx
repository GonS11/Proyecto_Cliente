export default function HomeNavBar(){
return (
  <div className="navigation">

  <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
  <label htmlFor="navi-toggle" className="navigation__button">
    <span className="navigation__icon">&nbsp;</span>
  </label>

  <div className="navigation__background"></div>

  <nav className="navigation__nav">
    <ol className="navigation__list">
      <li className="navigation__item">
        <a href="#" className="navigation__link"><i className="material-icons">arrow_forward</i>Desbloqueadoss</a>
      </li>
      <li className="navigation__item">
        <a href="#" className="navigation__link"><i className="material-icons">arrow_forward</i>Tienda</a>
      </li>
      <li className="navigation__item">
        <a href="#" className="navigation__link"><i className="material-icons">arrow_forward</i>Sobre Nosotros</a>
      </li>
    </ol>
  </nav>
  </div>
)
}