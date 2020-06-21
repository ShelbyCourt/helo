module.exports = {
    getAllPosts: async (req, res) => {
        db = req.app.get('db');

        const allPosts = await db.get_all_posts();
        const { userposts, search } = req.query;
        const { id } = req.session.user;


        console.log(userposts, search);
 
        if ( userposts == 'true' && search != '') {
            const filteredPosts = allPosts.filter(post => {
                if( post.title.includes(search)){
                    return post;
                }
            }) 
            return res.status(200).send(filteredPosts);
        }

        if ( userposts != 'true' && search == '') {
            const filteredPosts = allPosts.filter(post => {
                if ( id != post.author_id) {
                    return post;
                }
            })
            return res.status(200).send(filteredPosts);
        }

        if ( userposts != 'true' && search != '') {
            const filteredPosts = allPosts.filter(post => {
                if(id != post.author_id && post.title.includes(search)) {
                    return post;
                }
            })
            return res.status(200).send(filteredPosts);
        }

        if ( userposts == 'true' && search == '') {
            return res.status(200).send(allPosts);
            }
    },

    getOnePost: async (req, res) => {
        db = req.app.get('db');
        const { postId } = req.query

        const onePost = await db.get_one_post(postId);
        return res.status(200).send(onePost);

    },

    deletePost: async (req, res, next) => {
        db = req.app.get('db');
        const { postId } = req.query    
        
        await db.delete_post( postId )
        const allPosts = await db.get_all_posts();
        return res.status(200).send(allPosts);

    },
    
    addNewPost: async (req, res) => {
        db = req.app.get('db');
        const { userId } = req.query
        const {title, img, content} = req.body;
        
        await db.add_new_post([title, img, content, userId]);
        return res.sendStatus(200);
    },

    updateTitle: async (req, res) =>  {
        console.log('in updateTitle')
        db = req.app.get('db');
        const { postId } = req.query
        const { title } = req.body

        const updatedPost = await db.update_title(postId, title)
        return res.status(200).send(updatedPost);

    }

    // getAllPosts: (req, res) => {
    //     const db = req.app.get('db');

    //     db.get_all_posts()
    //     .then(posts => res.status(200).send(posts))
    //     .catch(err => res.status(500).send(err));
    // }

    
}