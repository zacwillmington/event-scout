import React, { Component } from 'react';
import { connect } from 'react-redux';
import addCurrentUser from '../actions/userActions';
import { withAlert } from "react-alert";

class SigninContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    }
  }

  componentDidMount() {
    debugger
  }

  componentDidUpdate() {
    //   debugger;
  }

  handleOnChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
          email: this.state.email,
          password: this.state.password
      })
      const user = this.state;
      this.props.addCurrentUser(user);
      this.setState({ email: '',
    password: ''});
  } 
  
  renderErrors = () => {
      debugger
    return this.props.alert.error(this.state.errors)
}

    render() {
      return (
        <div>
            
            {this.renderErrors()}
            <h2>Signin</h2>
            <div className='siginInput'>
                <form onSubmit={event => this.handleSubmit(event)} > 
                    <label htmlFor='signin-email'>Email</label><br></br>
                    <input id='sigin-email' onChange={event => this.handleOnChange(event)} name='email' type='text' value={this.state.email}/>
                    <br></br>
                    <label htmlFor='signin-password'>Password</label><br></br>
                    <input id='signin-password' onChange={event => this.handleOnChange(event)} name='password' type='password' value={this.state.password}/>
                    <input className='btn btn-primary' type='submit' value='Sign in'/>
                </form>
            </div>
        </div>
      )
    }
  }

  const mapDispatchToProps = dispatch => {
    return { 
        addCurrentUser: (user) => {
            dispatch(addCurrentUser(user));
        } 
    }
}

const mapStateToProps = state => {
    return { currentUser: state.currentUser, isLoading: state.isLoading, hasErrors: state.hasErrors, errors: state.errors }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);
