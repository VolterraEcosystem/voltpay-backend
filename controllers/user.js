var {body, validationResult} = require('express-validator');
var {User} = require('../models/user');

const createUser = [
	body('email', 'Email Address is required').notEmpty().isEmail(),
	body('email').custom(async function (inputValue) {
		const emailExists = await User.exists({email: inputValue});

		if (emailExists) {
			throw Error(
				'A different wallet is associated with this email address'
			);
		}

		return true;
	}),
	body('password', 'Password is required').isLength({min: 8, max: 32}),
];
