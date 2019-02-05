import React, { Component } from 'react';

class FoodAndDrinksEvents extends Component {

    render() {
        return (
            <div className='food-and-drinks-events-container'>
                <a onClick={event => this.props.handleDisplayEvents(event)}>
                    <h1>Food And Drink</h1>
                </a>
            </div>
        );
    }
}

export default FoodAndDrinksEvents;