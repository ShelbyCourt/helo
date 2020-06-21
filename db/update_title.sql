update posts
set title = $2
where id = $1
returning *;