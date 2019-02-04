import React, { Component } from 'react';
import { setUsersLocation } from '../actions/userActions';
import { connect } from 'react-redux';

class Geolocate extends Component {
  constructor(){
    super();
    this.state = {
      countryName: '',
      regionName: ''
    }
  }
  componentWillMount(){
    //Save user's coordinates to state to search for event near them.
    if(this.props.coords !== null){
      this.props.setUsersLocation(this.props.coords);
    } else {
      // debugger
    }
  }


  render() {
   return (
     <div></div>
   )
  }
}

const mapStateToProps = state => {
  return { usersLocation: state.usersReducer.usersLocation }
}
 
const mapDispatchToProps = dispatch => {
  return {
    setUsersLocation: (coords) => {
      dispatch(setUsersLocation(coords))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocate);