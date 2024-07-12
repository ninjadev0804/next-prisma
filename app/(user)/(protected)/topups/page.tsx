import React from "react";
import { prisma } from "@/prisma/client";
import ClientTopUpTable from "@/components/users/tables/topups";
import TopUpProps from "@/types/topups";

const UserTopUpPage = () => {
	// CALL PRISMA && GET TOPUP DATA
	const data: TopUpProps[] = [];

	return (
		<main>
			<ClientTopUpTable data={data} />
		</main>
	);
};

export default UserTopUpPage;
