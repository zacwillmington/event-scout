import React from 'react';

const FoodAndDrinksEvents = props => {
    return (
        <div className='food-and-drinks-events-container'>
            <a onClick={event => props.handleDisplayEvents(event)}>
                <h1>Food and Drink</h1>
            </a>
        </div>
    );
}

export default FoodAndDrinksEvents;