const { Router } = require('express');
const authController = require('../controllers/authController');
const postController = require('../controllers/postController');


const { requireAuth, checkUser } = require('../middleware/authMiddleware.js');
const router = Router();

router
.route('/signup')
.get(checkUser,authController.signup_get)
.post(authController.signup_post);

router
.route('/login')
.get( checkUser,authController.login_get)
// .get(authController.login_get)
.post(authController.login_post);

router.get('/logout',authController.logout_get);

router.get('/post',requireAuth, postController.post_get);

module.exports = router;