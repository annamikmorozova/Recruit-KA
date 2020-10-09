const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	dateOfBirth: {
		type: Sequelize.DATEONLY,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	gender: {
		type: Sequelize.ENUM("female", "male"),
		defaultValue: "male"
	},
	bio: {
		type: Sequelize.TEXT,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	nationality: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
		validate: {
			isEmail: true,
			notEmpty: true
		}
	},
	password: {
		type: Sequelize.STRING,
		get() {
			return () => this.getDataValue("password");
		}
	},
	salt: {
		type: Sequelize.STRING,
		get() {
			return () => this.getDataValue("salt");
		}
	},
	role: {
		type: Sequelize.ENUM("admin", "player", "guest"),
		defaultValue: "guest"
	}
});

module.exports = User;

User.prototype.correctPassword = function(candidatePwd) {
	return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

User.generateSalt = function() {
	return crypto.randomBytes(16).toString("base64");
};

User.encryptPassword = function(plainText, salt) {
	return crypto
		.createHash("RSA-SHA256")
		.update(plainText)
		.update(salt)
		.digest("hex");
};

const setSaltAndPassword = user => {
	if (user.changed("password")) {
		user.salt = User.generateSalt();
		user.password = User.encryptPassword(user.password(), user.salt());
	}
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
User.beforeBulkCreate(users => {
	users.forEach(setSaltAndPassword);
});
