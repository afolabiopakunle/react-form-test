import React, {useState, useRef} from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal/ErrorModal'
import styles from './AddUser.module.css';

export default function AddUser(props) {

  const [error, setError] = useState(null);

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value || ''
    const enteredAge = ageInputRef.current.value || ''

    if(enteredAge.length <= 0) {
      setError({
        title: 'An error occured!',
        message: 'Age cannot be empty or less than zero'
      })
      return
    } else if(enteredName.trim().length === 0) {
      setError({
        title: 'An error occured!',
        message: 'Name cannot be blank or null' 
      })
      return
    }

    props.onAddUser(enteredName, enteredAge)
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
      <Input 
      myRef={nameInputRef} 
      autoFocus={false} 
     />
      <label htmlFor="age">Age (Years)</label>
      <Input 
      myRef={ageInputRef} 
      type={'number'} 
       />
      <Button type={'submit'}>Add User</Button>
    </form>
    </Card>
    </div>
  
  )
}
