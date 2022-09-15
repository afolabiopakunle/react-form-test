import React, {useState} from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal/ErrorModal'
import styles from './AddUser.module.css';

export default function AddUser(props) {

  const [enteredAge, setEnteredAge] = useState('');
  const [enteredUsername, setEnteredUserName] = useState('');
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredAge.length <= 0) {
      setError({
        title: 'An error occured!',
        message: 'Age cannot be empty or less than zero'
      })
      return
    } else if(enteredUsername.trim().length === 0) {
      setError({
        title: 'An error occured!',
        message: 'Name cannot be blank or null' 
      })
      return
    }

    props.onAddUser(enteredUsername, enteredAge)

    setEnteredAge('');

    setEnteredUserName('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
  }

  const errorModalHanlder = () => {
    setError(null)
  }

  return (
    <div>
{      error && <ErrorModal onCancel={errorModalHanlder} title={error.title} message={error.message} />}
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
    </div>
  
  )
}
