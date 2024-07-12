import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";

const FindAllAddress = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const addresses = await prisma.address.findMany();
		return res.status(200).json(addresses);
	}
}

export default FindAllAddress;