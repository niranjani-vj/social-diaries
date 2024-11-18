const express = require('express');
const mongoose = require('G:/Skylet Projects/social_diaries/src/config/db.js');
const authRoutes = require('./src/routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./src/middleware/authMiddleware');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authRoutes);

// view engine
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.locals.user = false; // Default value
  next();
});
app.use(checkUser); // Apply the middleware globally

app.get('/', (req, res) => res.render('home'));
app.get('/profile', requireAuth, (req, res) => res.render('profile'));

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000`);
});