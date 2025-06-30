import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={() => setMenuOpen(true)}
      />

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={() => setMenuOpen(false)}
        />

        {['home', 'about', 'services', 'work', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink className="anchor-link" href={`#${item}`} offset={50}>
              <p onClick={() => { setMenu(item); setMenuOpen(false); }}>
                {item === 'about' ? 'About Me' : item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="Underline" />}
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
