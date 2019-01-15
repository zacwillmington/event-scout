import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomePageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentWillMount() {
        
    }
    componentDidMount() {
        if (this.props.isLoggedin === false){
            // redirect to sigin
            debugger
        }
    }

    render() {
        return(
            <div className='homePageContainer'>
                HomePageContainer 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.usersReducer.currentUser,
        isLoggedin: state.isLoggedin,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(HomePageContainer) 