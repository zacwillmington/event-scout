import React, { Component } from 'react';
import { connect } from 'react-redux';

class SigninContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        submitted: false
    }
  }

  componentDidMount() {
    debugger
  }

  handleOnChangeEmail = event => {
    this.setState({
        email: event.target.value
    })
  }

  handleOnChangePassword = event => {
      this.setState({
          password: event.target.value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
          email: this.state.email,
          password: this.state.password,
          submitted: true
      })
      const user = this.state;
      this.props.addCurrentUser(user);
  } 

    render() {
      return (
        <div>
            <h2>Signin</h2>
            <div className='siginInput'>
                <form onSubmit={event => this.handleSubmit(event)} > 
                    <label htmlFor='signin-email'>Email</label><br></br>
                    <input id='sigin-email' onChange={event => this.handleOnChangeEmail(event)} name='email' type='text' value={this.state.email}/>
                    <br></br>
                    <label htmlFor='signin-password'>Password</label><br></br>
                    <input id='signin-password' onChange={event => this.handleOnChangePassword(event)} name='password' type='password' value={this.state.password}/>
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
            dispatch({
                type: 'ADD_CURRENT_USER',
                user: user
            });
        } 
    }
}

export default connect(null, mapDispatchToProps)(SigninContainer);
