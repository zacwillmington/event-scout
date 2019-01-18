import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



class HomePageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentWillMount() {
        if (!this.props.isLoggedin && !this.props.isLoading){
            // redirect to sigin
            this.props.history.push('/signin');
        }
    }

    componentDidMount() {
        debugger
    }

    render() {
        return(
            <div className='homePageContainer'>
                HomePageContainer 
                Welcome {this.props.currentUser.user_name}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.usersReducer.currentUser,
        isLoggedin: state.usersReducer.isLoggedin,
        isLoading: state.usersReducer.isLoading
    }
}

export default connect(mapStateToProps)(HomePageContainer) 