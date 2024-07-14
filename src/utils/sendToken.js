import Jwt from "jsonwebtoken";

// Create and send token  save in the cookie
export const sendToken = (user, statusCode, res) => {
	//Create Token
	const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE_TIME,
	});

	const { password, ...others } = user._doc;

	res.status(statusCode).json({
		success: true,
		token,
		user: others,
	});
};
