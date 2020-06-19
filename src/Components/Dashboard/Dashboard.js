import React, {Component} from 'react';
import Nav from '../Nav/Nav';
// import Post from '../Post/Post';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    constructor () {
        super ()
        this.state ={
            search: '',
            userposts: true,
            posts: [{
                postTitle: '',
                username:'username',
                profilePicture: 'profile_pic'
            }]
        }
    }

    // componentDidMount(){
    //     this.props.getAllPosts();
    // }

    getAllPosts = (e) => {
        const {postTitle} = this.state
        axios.post('/api/posts', {postTitle})
        .then( res => {
            console.log('Axios returned from login res.data: ' + JSON.stringify(res.data));
            this.props.getAllPosts(res.data.postTitle);
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            console.log(err);
            alert('Could not log in')
        })


    //    const postMap = props.posts.map((posts) => (
    //        console.log('posts' + posts),
    //     <Post 
    //         postTitle={props.postTitle}
    //         authorUsername={props.username}
    //         profilePicture={props.profile_pic} />
    //    ))
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
                <div className="PostContainer">
                    <h2>Posts</h2>

                        {/* <div className="Posts">{postMap}</div> */}
                        <div className="Posts">{this.getAllPosts}</div>
                        {/* <div className="Posts">Post3</div>
                        <div className="Posts">Post4</div> */}
                </div>

            </div>
        )
    }
}


const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userId,
        // profile_pic: reduxState.profile_pic
    };
}

export default connect(mapStateToProps)(Dashboard);