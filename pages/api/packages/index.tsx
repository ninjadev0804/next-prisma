import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const PackagesApi = (req: NextApiRequest, res: NextApiResponse) => {
	return res.status(200).json({ message: "package request was successful" });
};

export default PackagesApi;
