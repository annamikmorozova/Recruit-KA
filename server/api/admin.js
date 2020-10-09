const router = require('express').Router();
const {User, Product} = require('../db/models');

// checks if admin
function adminOnly(req, res, next) {
  if (req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).send('Admin access only');
  }
}

// Admins can see all users
router.get('/', adminOnly, async (req, res, next) => {
  try {
    const users = await User.findAll({
        attributes: ["id", "firstName", "lastName", "dateOfBirth", 
        "gender", "bio", "nationality", "email", ]
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;