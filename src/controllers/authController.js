
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');  // Load environment variables
dotenv.config();

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'This email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'socialDairiesSecret', {
    expiresIn: maxAge
  });
};

module.exports.signup_post = async (req, res) => {

  const {email,password,firstName, lastName,dob} = req.body;

  try {
    const user = await User.create({email, password, firstName, lastName,dob });
    console.log(user);
    const token = createToken(user._id);
    console.log('token:', token);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  }
  catch(err) {
    console.log('ERrorr::');
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send('user login');
}
