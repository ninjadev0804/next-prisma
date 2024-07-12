import NextAuth from "next-auth";
import { prisma } from "@/prisma/client";
import { createHash } from "node:crypto";
import CredentialsProvider from "next-auth/providers/credentials";

interface props {
	email_address: string;
	password: string;
}

export default NextAuth({
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(credentials) {
				const { email_address, password } = credentials as props;

				const user = await prisma.user.findFirst({
					where: {
						AND: [
							{ email_address: email_address },
							{ password: createHash("sha3-256").update(password).digest("hex") },
						],
					},
				});

				if (!user) return null;

				return user;
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/signin",
	},
});
