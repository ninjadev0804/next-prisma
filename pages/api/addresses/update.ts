/***
 * TASK 1: CREATE THE UI TO SHOW SAVE ADDRESSES USE ANTD TABLE
 * TASK 2: CREATE A MODAL WHICH WILL BE TRIGGER BY A BUTTON YOU CAN PLACE THE BUTTON ON TABLE TITLE
 * TASK 3: CREATE AN ADDRESS TABLE IN DB FROM PRISMA SCHEMA FOLLOW AddressProps
 * TASK 4: CONNECT ADDRESS API TO STORE NEW ADDRESS
 * TASK 5: MAKE EDIT OPTION
 */
import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface AddressProps {
	// id: number;
	fullName: string;
	company?: string;
	phoneNum?: string;
	streetOne: string;
	streetTwo?: string;
	city: string;
	state: string;
	country: string;
}

const AddressesApi = async (req: NextApiRequest, res: NextApiResponse) => {
	/**
	 * DO ALL THE ADDRESS API STUFF HERE
	 */

	const { fullName, company, phoneNum, streetOne, streetTwo, city, state, country } = JSON.parse(req.body);

	if (req.method === "POST" && req.headers.accept === "application/json") {
		if (fullName && streetOne && city && state) {
			try {
				const address = await prisma.address.update({
					where: {
						id: req.query.id as string,
					},
					data: {
						full_name: fullName,
						company_name: company,
						phone_number: phoneNum,
						street_one: streetOne,
						street_two: streetTwo,
						city_name: city,
						state_code: state,
						country: country,
					}
				})
				return res.status(200).json(address);
			} catch (error) {
				return res.status(400).json({ message: "email address already exists" });
			}
		} else {
			return res.status(400).json({ message: "some fields are missing" });
		}

	}
	return res.status(404).json({ message: "something went wrong" });
};

export default AddressesApi;
