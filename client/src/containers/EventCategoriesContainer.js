import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import MusicEvents from '../components/MusicEvents';
import BusinessEvents from '../components/BusinessEvents';
import FoodAndDrinksEvents from '../components/FoodAndDrinksEvents';
import { register } from '../serviceWorker';


class EventCategoriesContainer extends Component {
    constructor() {
        super();
        this.state = {
            musicEvents:  [],
            foodAndDrinkEvents:  [],
            businessEvents:  []
        }
    }

    componentDidMount(){
        this.setState({
            musicEvents:  this.props.preLoadedEventCategories.musicEvents.events,
            foodAndDrinkEvents:  this.props.preLoadedEventCategories.foodAndDrinkEvents.events,
            businessEvents:  this.props.preLoadedEventCategories.businessEvents.events
        })
    }

    handleDisplayEvents = event => {
        switch (event.target.innerText) {
            case "Music":
                
            case "Food And Drink":

            case "Business":

            default:
                break;
        }
    }

    render() {
        return (
            <div className='categories-events-container'>
                <h1>Categories</h1>
                <div className='events-components'>
                    <MusicEvents
                     event={this.state.musicEvents}
                     handleDisplayEvents={this.handleDisplayEvents}
                     />

                    <FoodAndDrinksEvents 
                    events={this.state.foodAndDrinkEvents}
                    handleDisplayEvents={this.handleDisplayEvents}
                    />
                    
                    <BusinessEvents 
                    events={this.state.businessEvents}
                    handleDisplayEvents={this.handleDisplayEvents}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        preLoadedEventCategories: state.eventsReducer.preLoadedEventCategories
    }
}

export default connect(mapStateToProps)(EventCategoriesContainer);