/***
 * TASK 1: CREATE THE UI TO SHOW SAVE ADDRESSES USE ANTD TABLE
 * TASK 2: CREATE A MODAL WHICH WILL BE TRIGGER BY A BUTTON YOU CAN PLACE THE BUTTON ON TABLE TITLE
 * TASK 3: CREATE AN ADDRESS TABLE IN DB FROM PRISMA SCHEMA FOLLOW AddressProps
 * TASK 4: CONNECT ADDRESS API TO STORE NEW ADDRESS
 * TASK 5: MAKE EDIT OPTION
 */
import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface FaqProps {
	id: number;
	title: string;
	content: string;
	hide: number;
	created_at: string;
	updated_at: string;
}

const FaqApi = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		try {
			const faqs = await prisma.faq.findMany({
				orderBy: {
					created_at: "desc",
				},
			});

			res.status(200).json({ data: faqs });
		} catch (error) {
			res.status(400).json({ message: "Something went wrong" });
		}
	}
};

export default FaqApi;
