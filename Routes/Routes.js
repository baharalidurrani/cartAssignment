const express = require('express');
const Router = express.Router();
const Passport = require('passport');

const Login = require('../Controllers/LoginController');
const Register = require('../Controllers/RegisterController');
const Home = require('../Controllers/HomeController');
const Profile = require('../Controllers/ProfileController');
const Logout = require('../Controllers/LogoutController');
const Upload = require('../Controllers/UploadController');
const Cart = require('../Controllers/CartController');

const Auth = require('../Middleware/passport_auth');
//const UploadMiddleware = require('../Middleware/uploadFile');

module.exports = Router;

//Home route
Router.get('/', Auth.islogin, Home);

//Login Route
Router.get('/login', Auth.restric, Login.get);
Router.post('/login', Passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

//Register route
Router.get('/register', Auth.restric, Register.get);
Router.post('/register', Register.post);

Router.get('/profile', Auth.islogin, Profile.display);
Router.get('/logout', Logout);

Router.get('/edit', Auth.islogin, Profile.edit);
Router.post('/edit', Auth.islogin, Profile.update);

//upload product
Router.get('/upload', Auth.islogin, Upload.get);
Router.post('/upload', Auth.islogin, Upload.post);

//cart
Router.get('/cart', Auth.islogin, Cart.get);
Router.post('/cart', Auth.islogin, Cart.post);