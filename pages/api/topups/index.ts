import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const TopUpApi = (req: NextApiRequest, res: NextApiResponse) => {
	return res.status(200).json({ message: "topup request was successful" });
};

export default TopUpApi;
