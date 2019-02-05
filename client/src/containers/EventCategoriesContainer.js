import React, { Component } from 'react';
import MusicEvents from '../components/MusicEvents';
import BusinessEvents from '../components/BusinessEvents';
import FoodAndDrinksEvents from '../components/FoodAndDrinksEvents';


class EventCategoriesContainer extends Component {
    render() {
        return (
            <div className='categories-events-container'>
                <h1>Categories</h1>
                <div className='events-components'>
                    <MusicEvents />
                    <FoodAndDrinksEvents />
                    <BusinessEvents />
                </div>
            </div>
        );
    }
}

export default EventCategoriesContainer;