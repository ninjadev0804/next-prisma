interface SupportProps {
	id: number;
	uuid: string;
	token: string;
	ticket_title: string;
	message_token: string;
	created_at: string;
	updated_at: string;
}

interface MessageProps {
	id: number;
	uuid: string;
	message_token: string;
	message: string;
	created_at: string;
	updated_at: string;
}

export type { SupportProps, MessageProps };
