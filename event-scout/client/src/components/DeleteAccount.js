import React from 'react';
import DeleteAccount from './DeleteAccount';

const DeleteAccount = (props) => { 
    return (
        <div id='delete-account-btn'>
            <button onClick={(event) => props.handleDelete(event)}>
            Delete
            </button>
        </div>
    )
}

export default DeleteAccount