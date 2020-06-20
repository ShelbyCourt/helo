import React, {Component} from 'react';
import Nav from '../Nav/Nav';



class Post extends Component {
    

    render () { 
        return (
            <div>
                <Nav/>
                <h1>Post</h1>

                <button>Delete Post</button>
            </div>
        )
    }
}

export default Post;