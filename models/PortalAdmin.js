const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator")

const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

AdminSchema.pre("save", function (next) {
  const Admin = this;
  if (!Admin.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(Admin.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      Admin.password = hash;
      next();
    });
  });
});

AdminSchema.methods.comparePassword = function (candidatePassword) {
  const Admin = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, Admin.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  });
};



module.exports = mongoose.model("Admin", AdminSchema);
