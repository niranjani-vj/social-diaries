const jwt = require('jsonwebtoken');
const User = require('../models/User');

if (!jwt) {
    console.error('JWT is undefined');
}
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log('user-req::', token);

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'socialDairiesSecret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};


// check current user
// const checkUser = (req, res, next) => {
//     const token = req.cookies.jwt ;
//     console.log('toke::',token);
//     res.locals.user = false;
//     if (token) {
//         try {
//             jwt.verify(token, 'socialDairiesSecret', async (err, decodedToken) => {
//                 if (err) {
//                     res.locals.user = false;
//                 } else {
//                   const user = await User.findById(decodedToken.id);
//                   res.locals.user = user || false;
//                 }
//                 next();
//             });
//         } catch (error) {
//             console.error('Error verifying token:', error);
//             res.locals.user = false;
//             next();
//         }
//     } else {
//       res.locals.user =  false;
//       console.log('user::', res.locals.user);
//       next();
//     }
//   };
  
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt || null;
  res.locals.user = false; // Default value for unauthenticated users
  console.log('Token:', token);

  if (token) {
      jwt.verify(token, 'socialDairiesSecret', async (err, decodedToken) => {
          if (err) {
              console.error('JWT verification failed:', err);
          } else {
              try {
                  const user = await User.findById(decodedToken.id);
                  res.locals.user = user || false;
              } catch (dbError) {
                  console.error('Error fetching user from DB:', dbError);
              }
          }
          console.log('res.locals.user after verification:', res.locals.user);
          next();
      });
  } else {
      console.log('No token found, res.locals.user set to:', res.locals.user);
      next();
  }
};


  module.exports = { requireAuth, checkUser };