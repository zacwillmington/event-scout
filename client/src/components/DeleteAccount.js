import React from 'react';

const DeleteAccount = (props) => { 
    return (
        <form onSubmit={(event) => props.handleDelete(event)}>
            <input className='btn btn-primary' type='submit' value='Delete'/>
        </form>
    )
}

export default DeleteAccount