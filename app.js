const express = require('express');
const mongoose = require('G:/Skylet Projects/social_diaries/src/config/db.js');
const authRoutes = require('./src/routes/authRoutes');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);

// view engine
app.set('view engine', 'ejs');

// // database connection
// const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//   .then((result) => app.listen(3000))
//   .catch((err) => console.log(err));

// routes

app.get('/', (req, res) => res.render('home'));
app.get('/profile', (req, res) => res.render('profile'));

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000`);
});