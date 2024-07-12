"use client";

import APP from "@/config";
import Image from "next/image";
import { Layout, Spin } from "antd";
import logo from "@/static/logo.svg";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ThemeContext } from "@/provider/theme";
import UserHeader from "@/components/users/headers";
import SiderMenu from "@/components/users/menus/sider";

const { Header, Footer, Sider, Content } = Layout;

const UserProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const { status } = useSession();
	const { isDark, collapsed, setCollapsed } = useContext(ThemeContext);

	if (status === "loading") {
		return (
			<div className="flex items-center justify-center w-full h-screen">
				<Spin />
			</div>
		);
	}

	// if (status === "authenticated") {
		return (
			<Layout hasSider>
				<Sider
					breakpoint="lg"
					collapsed={collapsed}
					trigger={null}
					className="top-0 bottom-0 left-0 z-50 h-screen shadow"
					theme={isDark ? "dark" : "light"}
					width={240}
					collapsedWidth={80}
					onBreakpoint={(broken) => setCollapsed(broken)}
					style={{ position: "fixed" }}>
					<div
						className={`flex items-center px-4 h-[64px] gap-x-2 ${
							collapsed ? "justify-center" : "justify-start"
						}`}>
						<Image src={logo} alt="logo" height={40} width={40} />
						{!collapsed ? (
							<span className="text-lg capitalize transition-[all_0.2s] font-semibold">{APP.NAME}</span>
						) : null}
					</div>
					<SiderMenu />
				</Sider>
				<Layout style={{ paddingLeft: collapsed ? 80 : 240 }} className="transition-[padding_0.2s]">
					<Header style={{ background: "white" }} className="sticky top-0 shadow">
						<UserHeader />
					</Header>
					<Content className="px-10 py-5" style={{ height: 800 }}>
						{children}
					</Content>
					<Footer />
				</Layout>
			</Layout>
		);
	// }

	return router.replace("/signin");
};

export default UserProtectedLayout;
