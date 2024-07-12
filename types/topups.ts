interface TopUpProps {
	id: number;
	uuid: string;
	status: "complete" | "pending" | "failed";
	token_number: string;
	gateway_type: "paypal" | "card" | "coinbase" | "manual";
	gateway_name: string;
	request_credit: number;
	created_at: string;
	updated_at: string;
}

export default TopUpProps;
