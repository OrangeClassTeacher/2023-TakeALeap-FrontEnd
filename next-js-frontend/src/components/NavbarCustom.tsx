import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  items: { label: string; link: string }[];
}

export const NavbarCustom: React.FC<NavbarProps> = ({ items }): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link href="/">
          psd
        </Link>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        {items.map((item) => (
          <li key={item.link}>
            <Link href={item.link}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
      </div>
    </nav>
  );
};

