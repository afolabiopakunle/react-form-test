import React, {useState} from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

export default function AddUser(props) {

  const [enteredAge, setEnteredAge] = useState('');
  const [enteredUsername, setEnteredUserName] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredAge.length <= 0) {
      alert(null)
    } else if(enteredUsername.trim().length === 0) {
      alert('Are you serious? Give us a username')
      props.onAddUser(enteredUsername, enteredAge)
    }
    // console.log(enteredUsername, enteredAge)
    // setEnteredAge('');

    // setEnteredUserName('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
  }


  return (
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      {/* <input autoFocus={true} type="text" id='username' /> */}
      <Input value={enteredUsername} autoFocus={false} onChange={usernameChangeHandler} />
      <label htmlFor="age">Age (Years)</label>
      <Input value={enteredAge} type={'number'} onChange={ageChangeHandler} />
      {/* <button type="submit">Add User</button> */}
      <Button type={'submit'}>Add User</Button>
    </form>
    </Card>

  
  )
}
