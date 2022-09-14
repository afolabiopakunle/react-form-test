import React from 'react';
import styles from './Input.module.css';

export default function Input(props) {

  return (
    <input 
    className={`${styles.input} ${props.className}`} 
    type={props.type} 
    autoFocus={props.autoFocus || false} />
  )
}