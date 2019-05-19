const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const hbs = require('hbs');

mongoose
  .connect( 'mongodb://heroku_6b1kb3kl:3v953ico15f0litku0f34g2i2q@ds341825.mlab.com:41825/heroku_6b1kb3kl', { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);


app.use(session({
    secret: 'sessionMonster',
    saveUninitialized: true,
    resave: true,
    store   : new MongoStore({
      mongooseConnection: mongoose.connection
    })
}));

require('./configs/passport');

const cors = require("cors");
app.use(
  cors({
    origin: ["https://open-fridge-inc.herokuapp.com", 'http://localhost:3000', 'http://localhost:5000'],
    credentials: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/build")));
app.use(express.static(path.join(__dirname, "public/")));

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use('/api', authRoutes);


module.exports = app;
