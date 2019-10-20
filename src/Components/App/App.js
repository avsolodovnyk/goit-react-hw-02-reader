import React from 'react';
import Reader from '../Reader';
import styles from './App.module.css';
import publications from '../../Data/publications.json';

function App() {
  return (
    <div className={styles.reader}>
      <Reader items={publications} />
    </div>
  );
}

export default App;
