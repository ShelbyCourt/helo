insert into usersa (username, password, profile_pic)
values ($1, $2, $3);

select * from usersa
where username = $1;