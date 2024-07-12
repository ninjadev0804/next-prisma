import transporter from "@/mail/client";
import { prisma } from "@/prisma/client";
import { createHash } from "node:crypto";
import { SubmitFormProps } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

const UserApi = async (req: NextApiRequest, res: NextApiResponse) => {
	/**
	 * POST METHOF
	 */
	if (req.method === "POST" && req.headers.accept === "application/json") {
		const { email_address, first_name, last_name, password } = JSON.parse(req.body) as SubmitFormProps;

		if (email_address && first_name && last_name && password) {
			try {
				const user = await prisma.user.create({
					data: {
						email_address: email_address,
						first_name: first_name,
						last_name: last_name,
						password: createHash("sha3-256").update(password).digest("hex"),
					},
				});

				// // send mail with defined transport object
				// let info = await transporter.sendMail({
				// 	from: '"Fred Foo 👻" <foo@example.com>', // sender address
				// 	to: `${first_name} ${last_name} <${email_address}>`, // list of receivers
				// 	subject: "Hello ✔", // Subject line
				// 	text: password, // plain text body
				// 	html: "<b>Hello world?</b>", // html body
				// });

				res.status(200).json(user);
			} catch (error) {
				res.status(400).json({ message: "Email address already exists" });
			}
		}

		return res.status(400).json({ message: "some fields are missing" });
	}

	return res.status(404).json({ message: "something went wrong" });
};

export default UserApi;
