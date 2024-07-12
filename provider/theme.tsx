"use client";

import { ThemeProps } from "@/types";
import { createContext, useState } from "react";

const ThemeContext = createContext<ThemeProps>({
	collapsed: false,
	setCollapsed: () => {},
	isDark: false,
	setDark: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [isDark, setDark] = useState<boolean>(false);
	const [collapsed, setCollapsed] = useState<boolean>(false);

	return (
		<ThemeContext.Provider value={{ collapsed, setCollapsed, isDark, setDark }}>{children}</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
