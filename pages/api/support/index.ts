import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const SupportApi = (req: NextApiRequest, res: NextApiResponse) => {
	return res.status(200).json({ message: "request was successful" });
};

export default SupportApi;
