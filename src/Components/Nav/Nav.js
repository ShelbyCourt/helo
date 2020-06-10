import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import George from 'https://robohash.org/George';


class Nav extends Component {
    
    render () { 
        return (
            <div className="sidebar">
                <nav>
                    <h1>Nav</h1>
                        <img scr="https://media.gettyimages.com/photos/portrait-of-mid-adult-businesswoman-smiling-picture-id985138658?s=612x612"/>
                        <br/>
                        <p>{this.username}</p>
                        <Link to="/dashboard">
                            <button>Home</button>
                            <br/>
                        </Link>
                        <Link to="/post/:postid">
                            <button>New Post</button>
                            <br/>
                        </Link>
                        <Link to="/">
                            <button className="logoutBottom">Logout</button>
                        </Link>    
                    </nav>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Nav)