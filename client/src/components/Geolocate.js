import React, { Component } from 'react';
import { setUsersLocation } from '../actions/userActions';
import { connect } from 'react-redux';

class Geolocate extends Component {

  componentDidUpdate(){
    //Save user's coordinates to state to search for event near them.
    if(this.props.coords && !this.props.locationSet){
      this.props.setUsersLocation(this.props.coords);
    }
  }


  render() {
   return (
     <div></div>
   )
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    setUsersLocation: (coords) => {
      dispatch(setUsersLocation(coords))
    }
  }
}

export default connect(null, mapDispatchToProps)(Geolocate);