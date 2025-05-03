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
          return res.status(401).json({ message: 'The password your entered is incorrect. Please try again.' });
        }

        if (parseInt(user.status) === 0) {
           return res.status(401).json({ message: 'You need to confirm your account. We have sent you an activation code, please check your email.!' });
        }

        let token = jwt.sign({user}, process.env.JWT_KEY, { expiresIn: '720h'});

        await Activity.create({
            user: user.id,
            event: "Sign In",
            subject: "Sign In To Application",
            description: "Your has been logged in an application.",
            createdAt: new Date(),
            updatedAt: new Date()
        });

        return res.json({ token: token });
    },

    register: async function (req, res) {

        if (!req.body.email) {
          return res.status(400).json({ message: 'The field email can not be empty!' });
        }

        if (!req.body.password) {
          return res.status(400).json({ message: 'The field password can not be empty!' });
        }

        if (!req.body.password_confirmation) {
          return res.status(400).json({ message: 'The field password_confirmation can not be empty!' });
        }

        let name = req.body.name;
        let names = name.split(" ");
        let email = req.body.email;
        let password = req.body.password;
        let password_confirmation = req.body.password_confirmation;
        let user = await User.findOne({email: email});

        if (password.length < 8) {
          return res.status(400).json({ message: 'The password must be at least 8 characters.!' });
        }

        if (password_confirmation !== password) {
          return res.status(400).json({ message: 'The password confirmation does not match.!' });
        }

        if(user){
          return res.status(400).json({ message: 'The email has already been taken.!' });
        }

        let userData = {
          email: email,
          password: bcrypt.hashSync(password, 10),
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }

        if(names.length > 1){
          let lastName = names.slice(1, names.length)
          userData = {
            ...userData,
            firstName: names[0],
            lastName: lastName.join(" ")
          }
        }else{
          userData = {
            ...userData,
            firstName: name
          }
        }

        let confirmToken = faker.datatype.uuid()
        let newUser = await User.create(userData).fetch()

        await Authentication.create({
          user: newUser.id,
          type: 'email',
          credential: email,
          token: confirmToken,
          status: 0,
          expiredAt: (new Date(new Date().getTime() + 30 * 60000)), // 30 minutes
          createdAt: new Date(),
          updatedAt: new Date(),
        })

        await Activity.create({
          user: newUser.id,
          event: "Sign Up",
          subject: "Sign Up To Application",
          description: "Your has been registered in an application.",
          createdAt: new Date(),
          updatedAt: new Date()
      });

        return res.json({ message: 'You need to confirm your account. We have sent you an activation code, please check your email.', token: confirmToken });
    },

    confirm: async function (req, res) {

      let token = req.param('token')
      let user = await Authentication.findOne({token: token,  status: 0});

      if(!user){
        return res.status(400).json({ message: `We can't find a user with that token is invalid or expired!` });
      }

      let updateData = {
        status: 1,
        expiredAt: new Date(),
        updatedAt: new Date(),
      }

      let updateUser = {
        status: 1,
        updatedAt: new Date(),
      }

      await Authentication.updateOne({token: token, status: 0 }).set(updateData)
      await User.updateOne({ email: user.credential }).set(updateUser)

      return res.json({ message: 'Your e-mail is verified. You can now login.' });

    },

    forgot: async function (req, res) {

      if (!req.body.email) {
        return res.status(400).json({ message: 'The field email can not be empty!' });
      }

      let email = req.body.email;
      let user = await User.findOne({email: email});
      let resetToken = faker.datatype.uuid()

      if(!user){
        return res.status(401).json({ message: 'We can`t find a user with that e-mail address.' });
      }

      await Authentication.create({
        user: user.id,
        type: 'password',
        credential: email,
        token: resetToken,
        status: 0,
        expiredAt: (new Date(new Date().getTime() + 30 * 60000)), // 30 minutes
        createdAt: new Date(),
        updatedAt: new Date(),
      })

      await Activity.create({
          user: user.id,
          event: "Reset Password",
          subject: "Send Request Reset Password",
          description: "Your has been sent a request reset password.",
          createdAt: new Date(),
          updatedAt: new Date()
      });

      return res.json({ message: `We have e-mailed your password reset link!`, token: resetToken });

    },

    reset: async function (req, res) {

      let token = req.param('token')
      let user = await Authentication.findOne({token: token,  status: 0});

      if(!user){
        return res.status(400).json({ message: `We can't find a user with that token is invalid or expired!` });
      }

      let email = req.body.email;
      let password = req.body.password;
      let userEmail = await User.findOne({email: email});

      if(!userEmail){
        return res.status(401).json({ message: 'We can`t find a user with that e-mail address.' });
      }

      let updateData = {
        status: 1,
        expiredAt: new Date(),
        updatedAt: new Date(),
      }

      let updateUser = {
        password: bcrypt.hashSync(password, 10),
        status: 1,
        updatedAt: new Date(),
      }

      let activityData = {
        user: user.user,
        event: "Reset Password",
        subject: "Update Current Password",
        description: "Your has been changed a current password..",
        createdAt: new Date(),
        updatedAt: new Date()
      }

      await Authentication.updateOne({token: token, status: 0 }).set(updateData)
      await User.updateOne({email: email}).set(updateUser)
      await Activity.create(activityData)

      return res.json({ message: `Your password has been reset!` });

    }


}