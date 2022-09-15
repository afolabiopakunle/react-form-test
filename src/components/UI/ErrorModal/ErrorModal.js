import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card';
import styles from './ErrorModal.module.css';
import Button from '../Button/Button'

const Backdrop = (props) => {
  return     <div onClick={props.onCancel} className={styles.backdrop} />;
}

const ModalOverlay = (props) => {
    return <Card className={styles.modal}> 
    <header className={styles.header}><h2>{props.title}</h2></header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onCancel}>Okay</Button>
    </footer>
  </Card>
}

export default function ErrorModal(props) {
  return (
    <>
          {ReactDOM.createPortal(<Backdrop onCancel={props.onCancel}/>, document.getElementById('backdrop-root'))} 
          {ReactDOM.createPortal(<ModalOverlay 
          message={props.message}
          title={props.title} 
          onCancel={props.onCancel}/>, document.getElementById('overlay-root'))}
    </>
  )
}