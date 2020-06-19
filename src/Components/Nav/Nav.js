import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import George from 'https://robohash.org/George';


class Nav extends Component {
    

    render () { 

        return (
            <div className="sidebar">
                <nav>
                    {/* <h1>Nav</h1> */}
                        {console.log('props inside Nav: ' + JSON.stringify(this.props))}
                       
                        <h2>{this.props.username}</h2>
                        {/* <p> {this.props.profile_pic} {this.props.username}</p> */}

                        <img src={this.props.profile_pic} alt={this.props.username} width="100" height="150"/>


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