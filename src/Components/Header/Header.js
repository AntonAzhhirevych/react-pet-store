import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <ul className={styles.list}>
      <li>
        <Link className={styles.item} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.item} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className={styles.item} to="/pets">
          Pets
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
