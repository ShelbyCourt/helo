import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class Nav extends Component {
    
    render () { 
        return (
            <div>
                <h1>Nav</h1>
                    <img scr={this.profile_pic} />
                    <p>{this.username}</p>
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

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Nav)