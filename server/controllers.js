const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body

        const user = await db.check_user(username)  
        
        if(!user[0]){
            return res.status(404).send('User does not exist')
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if (authenticated) {
                req.session.user = {
                    userId: user[0].id,
                    username: user[0].username,
                    profilePicture: user[0].profile_pic
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Username or password incorrect')
            }
        }
    },

    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        const profilePicture = `https://robohash.org/${username}.png`
        console.log('Username:' + username);
        console.log('Password:' + password);
        
        const existingUser = await db.check_user(username)

        if (existingUser[0]){
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        console.log('hash:' + hash)
        console.log('pre db')

        const newUser = await db.register_user(username, hash, profilePicture)
        
        console.log('post db')

        req.session.user = {
            userId: newUser[0].id,
            username: newUser[0].username,
            profilePicture: newUser[0].profile_pic
        }
        res.status(200).send(req.session.user)
    },

    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
    
}