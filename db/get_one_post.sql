select posts.title, posts.img, posts.content, usersa.username, usersa.profile_pic from posts
join usersa on posts.author_id = usersa.id
where posts.id = $1;