import adalabLogo from '../images/adalab-logo-155x61.png';
import '../styles/App.scss';
import Link from './Link';
const Header = () => {
  return (
    <header className="header">
      <a href="https://adalab.es/">
        <img
          className="logo"
          src={adalabLogo}
          title="Logo de Adalab"
          alt="logo de Adalab"
        />
      </a>
      <nav>
        <ul className="header-menu">
        <li className="menu-item">
            <a href="#" title="Blog" className="menu-link">
            <Link text="Blog"/>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" title="Contacto" className="menu-link">
            <Link text="Contacto"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;