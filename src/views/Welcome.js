import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.css';

export default function Welcome() {
  return (
    <Link to="/home">
      <div className={styles.filler}>Welcome</div>;
    </Link>
  );
}
