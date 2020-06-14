import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import profilePicture from '../Auth/Auth';
// import George from 'https://robohash.org/George';


class Nav extends Component {
    

    render () { 

        return (
            <div className="sidebar">
                <nav>
                    <h1>Nav</h1>
                        {console.log('props inside Nav: ' + JSON.stringify(this.props))}
                        
                        <h2>New Way: {this.props.username}</h2>

                        {/* <img scr = {this.state.profilePicture} alt={username}/> */}
                        <br/>
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

// const mapStateToProps = reduxState => reduxState;
const mapStateToProps = reduxState => {
    return {
        username: reduxState.username,
        profile_pic: reduxState.profile_pic
    };
}

export default connect(mapStateToProps)(Nav)