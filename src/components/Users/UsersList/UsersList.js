import React from 'react';
import styles from './UsersList.module.css';

export default function UsersList(props) {

  return (
    <ul>
      {props.users.map(user => <li>{user.name} ({user.age}) years old.</li>)}
    </ul>
  )
}