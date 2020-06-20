module.exports = {
    getAllPosts: async (req, res) => {
        db = req.app.get('db');

        const allPosts = await db.get_all_posts();
        const { userposts, search } = req.query
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
    }





    
}