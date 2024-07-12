"use client";

import "@/static/globals.css";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "@/provider/theme";
import { SessionProvider } from "next-auth/react";
import type { ThemeConfig } from "antd/es/config-provider";

const theme: ThemeConfig = {
	token: {
		borderRadius: 0,
	},
};

const RootLayout = ({ children, session }: { children: React.ReactNode; session: any }) => {
	return (
		<html lang="en-US">
			<head />
			<body>
				<SessionProvider session={session}>
					<ConfigProvider theme={theme}>
						<ThemeProvider>{children}</ThemeProvider>
					</ConfigProvider>
				</SessionProvider>
			</body>
		</html>
	);
};

export default RootLayout;
