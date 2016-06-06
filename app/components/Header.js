import React from 'react'
import styles from './Header.css';
import { Link } from 'react-router'

const Header = () => (
    <header className={styles.header}>
      <h1>trivnode-react</h1>
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><Link to="/cats">cats</Link></li>
          <li><Link to="/clues">clues</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav>
    </header>
);


export default Header;
