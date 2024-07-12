import React from "react";
import ClientSupportTable from "@/components/users/tables/support";

const SupportUserPage = () => {
	// FETCH ALL SUPPORT ENTRIES FROM DB

	// PASS THE DATA TO SUPPORT TABLE
	return (
		<main>
			<ClientSupportTable />
		</main>
	);
};

export default SupportUserPage;
