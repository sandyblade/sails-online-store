/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const plainPassword = 'Qwerty123!';
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

async function createUser() {
  let gender_name = faker.person.sex().toLowerCase();
  let first_name = faker.person.firstName({ sex: gender_name });
  return {
    email: faker.internet.email().toLowerCase(),
    phone: faker.phone.number(),
    password: bcrypt.hashSync(plainPassword, 10),
    firstName: first_name,
    lastName: faker.person.lastName(),
    gender: gender_name === 'male' ? 'M' : 'F',
    country: faker.location.country(),
    address: faker.location.streetAddress(),
    zipCode: faker.location.zipCode(),
    status: 1,
    city: faker.location.city(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

async function createConfirm(user, email){
  let token = faker.string.uuid()
   return {
      user: user,
      type: 'email',
      credential: email,
      token: token,
      status: 2,
      expiredAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
   }
}

module.exports.bootstrap = async function() {

  let totalUser = await User.count();
  let max = 10;

  if(totalUser === 0)
  {
    for(let i = 1; i <= max; i++)
    {
      let userData = await createUser()
      let user = await User.create(userData).fetch()
      let confirm = await createConfirm(user.id , user.email)
      await Authentication.create(confirm)
    }
  }

};