import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "caleigh74@ethereal.email",
		pass: "HNprFj146x8phFV7Dr",
	},
});

export default transporter;
