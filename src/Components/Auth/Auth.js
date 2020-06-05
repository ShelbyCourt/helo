import React, {Component} from 'react';


class Auth extends Component {

    constructor(){

        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () { 
        const {username, password} = this.state
        return (
            <div>
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
                    <button>Login</button>
                    <button>Register</button>
            </div>
        )
    }
}

export default Auth;