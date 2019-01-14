import React, { Component } from 'react';
import { connect } from 'react-redux';
import addCurrentUser from '../actions/userActions';

class SigninContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    }
  }

  componentDidMount() {
    // debugger
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
  
    render() {
      return (
        <div>
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

export default connect(null, mapDispatchToProps)(SigninContainer);
