import React from 'react'
import styles from './Header.css';

const Header = () => (
    <div className={styles.header}>
      <h1>trivnode-react</h1>
      <div className={styles.nav}>
        <ul>
          <li><a href="/api/clues">clues api</a></li>
          <li><a href="https://bitbucket.org/scott_hill/trivnode-react">bitbucket</a></li>
        </ul>
      </div>
    </div>
);


export default Header;
