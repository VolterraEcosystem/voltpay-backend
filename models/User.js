var mongoose = require('mongoose');
var {nanoid} = require('nanoid');

const generateUserIdentifier = () => {
	return nanoid(48);
};

var userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		minLength: 8,
		maxLength: 255,
	},

	cachedWalletBalance: {
		type: Number,
		default: 0,
		min: 0,
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},

	userIdentifier: {
		type: String,
		min: 48,
		max: 48,
		unique: true,
		default: generateUserIdentifier,
		required: true,
	},

	lastLogin: {
		type: Date,
		default: Date.now,
	},

	lastModifiedAt: {
		type: Date,
		default: Date.now,
	},

	googleClientId: {
		type: String,
		unique: true,
	},
});

const User = mongoose.model('User', userSchema);

module.exports = {
	User,
};
