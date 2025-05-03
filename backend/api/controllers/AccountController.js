const bcrypt = require('bcrypt');

require("dotenv").config();

module.exports = {

  detail: async function (req, res) {
    return res.json(req.user);
  },

  password: async function (req, res) {

    let session = req.user
    let userid = session.id
    let user = await User.findOne({id: userid});
    let current_password = req.body.current_password;
    let password = req.body.password;
    
    if (!bcrypt.compareSync(current_password, user.password)) {
      return res.status(401).json({ message: 'The password your entered is incorrect. Please try again.' });
    }

    let updateUser = {
      password: bcrypt.hashSync(password, 10),
      updatedAt: new Date(),
    }

    let activityData = {
      user: user.id,
      event: "Change Password",
      subject: "Update Current User Password",
      description: "Your has been updated current password..",
      createdAt: new Date(),
      updatedAt: new Date()
    }

    await User.updateOne({id: user.id}).set(updateUser)
    await Activity.create(activityData)

    return res.json({ message: 'Your current password has been changed!!' });
  },

  update: async function (req, res) {

    let session = req.user
    let userid = session.id
    let email = req.body.email
    let phone = req.body.phone
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let gender = req.body.gender
    let country = req.body.country
    let city = req.body.city
    let zipCode = req.body.zipCode
    let address = req.body.address

    let checkEmail = await User.findOne({ where: { id: { '!=': userid }, email: email }});
    if(checkEmail){
      return res.status(400).json({ message: 'The email address has already been taken.!' });
    }

    let checkPhone = await User.findOne({ where: { id: { '!=': userid }, phone: phone }});
    if(checkPhone){
      return res.status(400).json({ message: 'The phone number has already been taken.!' });
    }

    let updateUser = {
      email: email,
      phone: phone,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      country: country,
      city: city,
      zipCode: zipCode,
      address: address,
      updatedAt: new Date(),
    }

    let activityData = {
      user: userid,
      event: "Update Profile",
      subject: "Update Current User Profile",
      description: "Your has been updated current user profile.",
      createdAt: new Date(),
      updatedAt: new Date()
    }

    await User.updateOne({id: userid}).set(updateUser)
    await Activity.create(activityData)
    return res.json({ message: 'Your user profile has been changed !!' });
  },


  upload: async function (req, res) {
    return res.json({ message: 'Your profile picture has been changed !!' });
  },

  activity: async function (req, res) {
    let user =  req.user
    let filter = { user: user.id  }
    let list = await Activity.find(filter).sort('id desc')
    return res.json(list);
  }

}