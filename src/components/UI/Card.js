import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {

  function submitHandler() {
    console.log('Wha')
  }

  return (
    <div className={`${styles.card} ${props.className}`} onClick={submitHandler}>{props.children}</div>
  )
}