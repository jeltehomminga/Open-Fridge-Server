const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const GroceryItem = require("../models/GroceryItem");
const mongoose = require("mongoose");
var multer = require("multer");
const upload = multer({ dest: "public/build/images/" });
const FoodOffer = require("../models/FoodOffer");
const FoodRequest = require("../models/FoodRequest");
const salt = bcrypt.genSaltSync(10);

//signup
authRoutes.post("/signup", (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    res
      .status(400)
      .json({ message: "are you kiddin?, just give email and password" });
  else if (password.length < 7) {
    res.status(400).json({
      message: "are you kiddin?, password must be atleast 8 characters"
    });
  } else {
    User.findOne({ username }, (err, foundUser) => {
      if (err) res.status(500).json({ message: "Username check went bad." });
      else if (foundUser) {
        res
          .status(400)
          .json({ message: "Username taken. Choose another one." });
      } else {

        const hashPass = bcrypt.hashSync(password, salt);
        const aNewUser = new User({
          username: username,
          password: hashPass
        });
        aNewUser.save(err => {
          if (err) {
            res
              .status(400)
              .json({ message: "Saving user to database went wrong." });
            return;
          }
          req.login(aNewUser, err => {
            err
              ? res
                  .status(500)
                  .json({ message: "Login after signup went bad." })
              : res.status(200).json(aNewUser);
          });
        });
      }
    });
  }
});

//login
authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();

  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

authRoutes.put("/user/:id", upload.single("profile-picture"), (req, res) => {
  req.body.userType === "foodSupplier"
    ? (req.body.foodSupplier = true)
    : (req.body.foodSupplier = false);
  req.body.userType === "foodConsumer"
    ? (req.body.foodConsumer = true)
    : (req.body.foodConsumer = false);
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
  } else {
    if (req.file) req.body.img = req.file.filename;
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(response => {
        res.json({
          message: `User profile with ${
            req.params.id
          } is updated successfully.`,
          img: req.body.img,
          response
        });
      })
      .catch(err => {
        res.json(err);
      });
  }
});

authRoutes.get("/groceryitems", (req, res, next) => {
  GroceryItem.find({})
    .then(response => {
      res.json(response);
    })
    .catch(err => res.json(err));
});

authRoutes.post(
  "/foodoffer",
  upload.single("groceryitem-picture"),
  (req, res, next) => {
    req.body.foodSupplier = req.session.passport.user;
    if (req.file) req.body.img = req.file.filename;
    FoodOffer.create(req.body)
      .then(response => {
        res.json(response);
      })
      .catch(err => res.json(err));
  }
);

authRoutes.post("/foodrequest", (req, res, next) => {
  req.body.foodConsumer = req.session.passport.user;
  FoodRequest.create(req.body)
    .then(response => {
      User.findByIdAndUpdate(req.body.foodConsumer, {
        $push: { foodRequests: response.id }
      }).then(result => {
        res.json(response);
      });
    })
    .catch(err => res.json(err));
});

authRoutes.get("/foodoffers", (req, res, next) => {
  FoodOffer.find()
    .populate("groceryItem foodSupplier acceptedBy")
    .then(response => {
      res.json(response);
    })
    .catch(err => res.json(err));
});

authRoutes.get("/foodrequests", (req, res, next) => {
  FoodRequest.find()
    .populate("groceryItem foodConsumer acceptedBy")
    .then(response => {
      res.json(response);
    })
    .catch(err => res.json(err));
});

authRoutes.post("/acceptoffer/:offerId", (req, res, next) => {
  FoodOffer.findByIdAndUpdate(
    req.params.offerId,
    { acceptedBy: req.session.passport.user, acceptedAt: Date.now() },
    { new: true }
  )
    .then(response => {
      res.json({
        message: `Offer with ${req.params.offerId} is updated successfully.`,
        response
      });
    })
    .catch(err => {
      res.json(err);
    });
});

authRoutes.post("/acceptrequest/:requestId", (req, res, next) => {
  console.log(Date.now());
  FoodRequest.findByIdAndUpdate(
    req.params.requestId,
    { acceptedBy: req.session.passport.user, acceptedAt: Date.now() },

    { new: true }
  )
    .then(response => {
      res.json({
        message: `Request with ${
          req.params.requestId
        } is updated successfully.`,
        response
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = authRoutes;
