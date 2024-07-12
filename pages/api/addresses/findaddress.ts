import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";


const FindOneAddress = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = JSON.parse(req.body);
    if (req.method === "POST") {
        const result = await prisma.address.findUnique({
            where: {
                id: id,
            },
        });
        return res.status(200).json(result);
    }
    return res.status(404).json({ message: "something went wrong" });
}

export default FindOneAddress;