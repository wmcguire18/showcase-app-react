import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css';

export default function Title() {
  return (
    <Link className='title' to='/' tabIndex={-1}>
      <h1>Verse Finder</h1>
      <h2>Ask. Seek. Knock.</h2>
    </Link>
  );
}
