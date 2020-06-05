import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component {
    

    render () { 
        return (
            <div>
                <h1>Nav</h1>
                    <Link to="/dashboard">
                        <button>Home</button>
                    </Link>
                    <Link to="/post/:postid">
                        <button>New Post</button>
                    </Link>
                    <Link to="/">
                        <button>Logout</button>
                    </Link>
            </div>
        )
    }
}

export default Nav;