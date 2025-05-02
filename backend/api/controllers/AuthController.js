const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { faker } = require('@faker-js/faker');

require("dotenv").config();

module.exports = {

    ping: async function (req, res) {
        return res.json({ status: true, message: 'Connected Established !!'});
    },

    login: async function (req, res) {

        if (!req.body.email) {
          return res.status(400).json({ message: 'The field email can not be empty!' });
        }
    
        if (!req.body.password) {
          return res.status(400).json({ message: 'The field password can not be empty!' });
        }
    
        let email = req.body.email
        let password = req.body.password
        let user = await User.findOne({email: email});
    
        if(!user){
          return res.status(401).json({ message: 'These credentials do not match our records.' });
        }
    
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ message: 'Wrong password!!' });
        }
    
        if (parseInt(user.status) === 0) {
           return res.status(401).json({ message: 'You need to confirm your account. We have sent you an activation code, please check your email.!' });
        }
    
        let token = jwt.sign({user}, process.env.JWT_KEY, { expiresIn: '24h'});
    
        await Activity.create({
            user: user.id,
            event: "Sign In",
            subject: "Sign Up To Application",
            description: "Your have been registered in an application.",
            createdAt: new Date(),
            updatedAt: new Date()
        });
    
        return res.json({ message: 'ok', data: { token: token, expiresIn: moment().add(24, 'hours').format('YYYY-MM-DD HH:mm:ss') } });
    },

    register: async function (req, res) {

        if (!req.body.email) {
          return res.status(400).json({ message: 'The field email can not be empty!' });
        }
    
        if (!req.body.password) {
          return res.status(400).json({ message: 'The field password can not be empty!' });
        }
    
        if (!req.body.password_confirm) {
          return res.status(400).json({ message: 'The field password_confirm can not be empty!' });
        }
    
        let email = req.body.email;
        let password = req.body.password;
        let password_confirm = req.body.password_confirm;
        let user = await User.findOne({email: email});
    
        if (password.length < 8) {
          return res.status(400).json({ message: 'The password must be at least 8 characters.!' });
        }
    
        if (password_confirm !== password) {
          return res.status(400).json({ message: 'The password confirmation does not match.!' });
        }
    
        if(user){
          return res.status(400).json({ message: 'The email has already been taken.!' });
        }
    
        let confirmToken = faker.datatype.uuid()
    
       
    
        return res.json({ message: 'You need to confirm your account. We have sent you an activation code, please check your email.', data: { confirmToken: confirmToken} });
    },

}