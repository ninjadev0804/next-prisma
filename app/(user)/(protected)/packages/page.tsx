import React from "react";
import { prisma } from "@/prisma/client";
import ClientPackagesTable from "@/components/users/tables/packages";

const UserPackagesPage = () => {
	// FETCH USER PACKAGES & PASS THE DATA TO CLIENT TABLE AS A PROP

	return (
		<main>
			<ClientPackagesTable />
		</main>
	);
};

export default UserPackagesPage;
