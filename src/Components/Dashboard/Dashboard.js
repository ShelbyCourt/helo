import React, {Component} from 'react';
import Nav from '../Nav/Nav';



class Dashboard extends Component {
    constructor () {
        super ()
        this.state ={
            search: '',
            postList: ''
        }
    }

    render () { 
        return (
            <div>
                <Nav/>
                <div className="searchbar">
                    <h1>Dashboard</h1>
                    <input
                        type="text" 
                        placeholder="Search by Title"
                        name="Search"
                        // value={username}
                        onChange={e => this.changeHandler(e)}/>
                    <button>Search</button>
                    <button>Reset</button>
                    <p>My Posts</p>
                    <input type="checkbox"/>
                </div>
                    <br/>

            </div>
        )
    }
}

export default Dashboard;