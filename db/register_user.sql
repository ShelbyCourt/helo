insert into usersa (username, password)
values ($1, $2);

select * from usersa
where username = $1;