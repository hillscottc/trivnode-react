import React from 'react'
import styles from './Header.css';
import { Link } from 'react-router'

const Header = () => (
    <div className={styles.header}>
      <h1>trivnode-react</h1>
      <div className={styles.nav}>
        <ul>
          <li><a href="/">home</a></li>
          <li><Link to="/cats">cats</Link></li>
          <li><Link to="/clues">clues</Link></li>
          <li><a href="/api/clues">clues api</a></li>
        </ul>
      </div>
    </div>
);


export default Header;
