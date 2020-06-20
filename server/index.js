require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controllers.js');
const postCtrl = require('./postControllers');

const app = express();

app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
        secret: SESSION_SECRET
    })
);

app.post('/api/login', ctrl.login)
app.post('/api/register', ctrl.register)
//app.delete('/api/logout', ctrl.logout)
app.get('/api/user', ctrl.getUser)


app.get('/api/posts', postCtrl.getAllPosts)

// console.log('Connection String IS' + ' '+ CONNECTION_STRING)
// console.log('Server Port IS' + ' '+ SERVER_PORT)

// Top level middleware
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Connected to db, my little friend!')
    app.listen( SERVER_PORT, () => console.log(`Black Lives Matter on ${SERVER_PORT}`))
}).catch( err => console.log(err));