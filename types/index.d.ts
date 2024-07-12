/**
 * ThemeProps
 *
 * @param mobileMenuOpen Boolean
 * @param setMobileMenuOpen Function
 */
interface ThemeProps {
	collapsed: boolean;
	setCollapsed: Function;
	isDark: boolean;
	setDark: Function;
}

/**
 * CustomHeadProps
 *
 * @param title String
 * @param description String
 * @param icon String
 */
interface CustomHeadProps {
	title: string;
	description?: string;
	icon?: string;
}

/**
 * SubmitFormProps
 *
 * @param first_name String
 * @param last_name String
 * @param email_address String
 * @param password String
 */
interface SubmitFormProps {
	first_name: string;
	last_name: string;
	email_address: string;
	password: string;
}

interface DataType {
	key?: React.Key;
	no?: number;
	name?: string;
	company?: string;
	city?: string;
	state?: string;
	country?: string;
}

export type { ThemeProps, CustomHeadProps, SubmitFormProps, DataType };
