import React from "react";
import ClientColapse from "@/components/users/collapses";
import APP from "@/config";

const fetchFaq = async () => {
	const response = await fetch(`${APP.URL}/api/faq`, {
		method: "GET",
		cache: "no-store",
		headers: {
			accept: "application/json",
		},
	});

	const data = await response.json();
	return data;
};

const FaqPage = async () => {
	const faqData = await fetchFaq();
	return (
		<div>
			<ClientColapse data={faqData.data} />
		</div>
	);
};

export default FaqPage;
