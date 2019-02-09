import React, { Component } from 'react';

class EventComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            venue_id: this.props.venue_id,
            logo: this.props.logo,
            description: this.props.description,
            url: this.props.url,
            start: this.props.start,
            end: this.props.end,
            status: this.props.status,
            currency: this.props.currency
        }
    }

    componentWillMount() {
        //Component is not rendered by react-router therefore fetch component
        // if (this.props.name === undefined){
        //     //fetch
        // debugger
        // }
        //fetch event on loading from store? or API if props doesn't have currentEvent.
    }

    render() {
        return (
            <div className='event'>
                <h1>{this.state.name}</h1>
                <img src={this.state.logo} alt='event-logo'/>
                <p>Add Like widget</p>
                <h3>Description</h3>
                <p>{this.state.description}</p>
                <ul>
                    <p>Starts</p>
                    <li>Time: {this.state.start}</li>
                    <p>Ends</p>
                    <li>{this.state.end}</li>

                    {/* <Link to={`${match.url}/exampleTopicId`}>
                        Example topic
                    </Link>
                    <Route path={`${match.url}/:topicId`} component={Topic}/> */}
                </ul>
            </div>
        )
    }   
}


export default EventComponent

//Event date receieved per event
// capacity: null
// capacity_is_custom: null
// category_id: "103"
// changed: "2019-01-09T16:17:54Z"
// created: "2018-06-12T11:10:31Z"
// currency: "GBP"
// description: {text: "An introduction on devising music sessions for stu…can be found at www.kent-music.com/privacy-policy", html: "<P>An introduction on devising music sessions for …nt-music.com/privacy-policy</A></SPAN></SPAN></P>"}
// end: {timezone: "Europe/London", local: "2019-01-24T18:30:00", utc: "2019-01-24T18:30:00Z"}
// format_id: "9"
// hide_end_date: false
// hide_start_date: false
// id: "46973208130"
// is_externally_ticketed: false
// is_free: false
// is_locked: false
// is_reserved_seating: false
// is_series: false
// is_series_parent: false
// listed: true
// locale: "en_GB"
// logo: {crop_mask: {…}, original: {…}, id: "45998785", url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%…53%2C580%2C290&s=e8ef9a4dcd0f1b8df02206509c471cfa", aspect_ratio: "2", …}
// logo_id: "45998785"
// name: {text: "Music and Autism", html: "Music and Autism"}
// online_event: false
// organization_id: "136284258300"
// organizer_id: "7963846409"
// privacy_setting: "unlocked"
// resource_uri: "https://www.eventbriteapi.com/v3/events/46973208130/"
// shareable: true
// show_colors_in_seatmap_thumbnail: false
// show_pick_a_seat: false
// show_seatmap_thumbnail: false
// source: "create_2.0"
// start: {timezone: "Europe/London", local: "2019-01-24T16:00:00", utc: "2019-01-24T16:00:00Z"}
// status: "live"
// subcategory_id: null
// tx_time_limit: 1200
// url: "https://www.eventbrite.co.uk/e/music-and-autism-tickets-46973208130?aff=ebapi"
// venue_id: "25201755"
// version: "3.0.0"