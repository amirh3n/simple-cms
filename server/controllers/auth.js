const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.register = (req, res, next) => {
  res.send('hellow');
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(
      new ErrorResponse('Please provide a valid email and password', 400)
    );
  }

  try {
    const user = await User.findOne({ username }).select('+password');
    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }
    const isMatchPassword = await user.matchPasswords(password);

    if (!isMatchPassword) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.forgotPassword = (req, res, next) => {
  res.send('hello 3');
};

exports.resetPassword = (req, res, next) => {
  res.send('hello 3');
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
