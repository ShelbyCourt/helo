require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env;

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


// Top level middleware
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Connected to db, ya filthy animal')
    app.listen( SERVER_PORT, () => console.log(`Black Lives Matter on ${SERVER_PORT}💃`))
}).catch( err => console.log(err));