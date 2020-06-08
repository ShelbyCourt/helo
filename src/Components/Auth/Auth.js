import React, {Component} from 'react';
import axios from 'axios';
import { loginUser } from '../../redux/reducer';
import {connect} from 'react-redux';


class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        const {username, password} = this.state
        axios.post('/auth/login', {username, password})
        .then( res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            console.log(err);
            alert('Could not log in')
        })
    }

    register = (e) => {
        e.preventDefault();
        const {username, password} = this.state
        axios.post('/auth/register', {username, password})
        .then( res => {
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            alert('Could not register')
        })
    }

    render () { 
        const {username, password} = this.state
        return (
            <div>
                <form>
                    <h1>Auth</h1>
                    <p>Username: </p>
                        <input
                            type="text" 
                            placeholder="username..."
                            name="username"
                            value={username}
                            onChange={e => this.changeHandler(e)}/>
                            <br/>
                        <p>Password: </p>
                        <input
                            type="password"
                            placeholder="password..."
                            name="password"
                            value={password}
                            onChange={e => this.changeHandler(e)}/>
                            <br/>
                        <button onClick={this.login}>Login</button>
                        <button onClick={this.register}>Register</button>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

const mapDispatchToProps = { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(Auth)