select posts.title, usersa.username, posts.id, posts.img, posts.content, posts.author_id from posts
join usersa on posts.author_id = usersa.id;