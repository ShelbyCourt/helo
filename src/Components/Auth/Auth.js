import React, {Component} from 'react';
import axios from 'axios';
import { updateUser } from '../../redux/reducer';
import {connect} from 'react-redux';


class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            profilePicture: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        const {username, password, profilePicture} = this.state
        axios.post('/api/login', {username, password, profilePicture})
        .then( res => {
            console.log('Axios returned from login res.data: ' + JSON.stringify(res.data));
            this.props.updateUser(res.data.userId, res.data.username, res.data.profilePicture);
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            console.log(err);
            alert('Could not log in')
        })
    }

    register = (e) => {
        e.preventDefault();
        const {username, password, profilePicture} = this.state
        axios.post('/api/register', {username, password, profilePicture})
        .then( res => {
            console.log('Axios returned from register res.data: ' + JSON.stringify(res.data));
            this.props.updateUser(res.data.userId, res.data.username, res.data.profilePicture);
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            alert('Could not register')
        })
    }

    render () { 
        const {username, password} = this.state
        return (
            <div className="Auth">
                <form>
                    <h1>Helo</h1>
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

// const mapStateToProps = reduxState => reduxState

const mapDispatchToProps = { updateUser: updateUser }

export default connect(null, mapDispatchToProps)(Auth)