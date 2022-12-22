import './user_list.css'
import React from 'react'
import UserItem from './user_item';

const UserList = props => {

    if (props.items.length === 0){
        return (
            <h1>No Users Found</h1>
        );
    } 
    
    return(
      <ul className='users-list'>
        {props.items.map(user => <UserItem 
        key={user.id} 
        id={user.id} 
        image={user.image} 
        name={user.name}
        placeCount = {user.places}
        />)}
      </ul>  
    );
}

export default UserList