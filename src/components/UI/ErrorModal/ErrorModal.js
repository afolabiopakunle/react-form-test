import React from 'react';
import Card from '../Card';
import styles from './ErrorModal.module.css';
import Button from '../Button/Button'
export default function ErrorModal(props) {
  return (
    <div onClick={props.onCancel} className={styles.backdrop}>
    <Card className={styles.modal}> 
      <header className={styles.header}><h2>{props.title}</h2></header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCancel}>Okay</Button>
      </footer>
    </Card>
    </div>
  )
}