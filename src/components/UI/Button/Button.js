import React from 'react';
import styles from './Button.module.css';

export default function(props) {

  return (
    <button 
    className={`${styles.button} ${props.className || ""}`} 
    type={props.type || 'button'}
    onClick={props.onClick}>{props.children}</button>
  )
}