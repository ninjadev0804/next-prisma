"use client";

import React from "react";
import "@/static/globals.css";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd/es/config-provider";

const theme: ThemeConfig = {
	token: {
		borderRadius: 0,
	},
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en-US">
			<head />
			<body>
				<ConfigProvider theme={theme}>{children}</ConfigProvider>
			</body>
		</html>
	);
};

export default Layout;
