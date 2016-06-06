import React from 'react'
import styles from './Header.css';
import { Link } from 'react-router'

const Header = () => (
    <header className={styles.header}>
      <h1>trivnode-react</h1>
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><Link to="/cats" activeClassName={styles.active} >cats</Link></li>
          <li><Link to="/clues" activeClassName={styles.active}>clues</Link></li>
          <li><Link to="/clues/cat" activeClassName={styles.active}>clues by cat</Link></li>
          <li><Link to="/about" activeClassName={styles.active}>about</Link></li>
        </ul>
      </nav>
    </header>
);


export default Header;
