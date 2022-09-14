import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

export default function AddUser() {

  const addUserHandler = (event) => {
    event.preventDefault();
  }
  return (
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      {/* <input autoFocus={true} type="text" id='username' /> */}
      <Input autoFocus={true} />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" id="age"/>
      {/* <button type="submit">Add User</button> */}
      <Button type={'submit'}>Add User</Button>
    </form>
    </Card>
  )
}
