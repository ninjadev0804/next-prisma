import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import {
	DashboardOutlined,
	DollarCircleOutlined,
	FilePdfOutlined,
	GlobalOutlined,
	InboxOutlined,
	InfoCircleOutlined,
	QuestionCircleOutlined,
	UsergroupAddOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const items: MenuProps["items"] = [
	{
		label: <span className="text-base uppercase">Menu</span>,
		type: "group",
		children: [
			{
				key: "dashboard",
				label: (
					<Link href="/dashboard">
						<span className="text-lg capitalize">Dashboard</span>
					</Link>
				),
				icon: <DashboardOutlined />,
			},
			{
				key: "labels",
				label: (
					<Link href="/dashboard">
						<span className="text-lg capitalize">Labels</span>
					</Link>
				),
				icon: <FilePdfOutlined />,
			},
			{
				key: "addresses",
				label: (
					<Link href="/addresses">
						<span className="text-lg capitalize">Addresses</span>
					</Link>
				),
				icon: <GlobalOutlined />,
			},
			{
				key: "packages",
				label: (
					<Link href="/packages">
						<span className="text-lg capitalize">Packages</span>
					</Link>
				),
				icon: <InboxOutlined />,
			},
			{
				key: "topups",
				label: (
					<Link href="/topups">
						<span className="text-lg capitalize">Topups</span>
					</Link>
				),
				icon: <DollarCircleOutlined />,
			},
		],
	},
	{
		type: "group",
		label: <span className="text-base uppercase">Marketing</span>,
		children: [
			{
				key: "referral",
				label: (
					<Link href="/referrals">
						<span className="text-lg capitalize">Referrals</span>
					</Link>
				),
				icon: <UsergroupAddOutlined />,
			},
		],
	},
	{
		type: "group",
		label: <span className="text-base uppercase">Contact</span>,
		children: [
			{
				key: "support",
				label: (
					<Link href="/support">
						<span className="text-lg capitalize">Support</span>
					</Link>
				),
				icon: <InfoCircleOutlined />,
			},
			{
				key: "faq",
				label: (
					<Link href="/faq">
						<span className="text-lg capitalize">Faq</span>
					</Link>
				),
				icon: <QuestionCircleOutlined />,
			},
		],
	},
];

const SiderMenu = () => {
	return <Menu defaultSelectedKeys={["dashboard"]} items={items} />;
};

export default SiderMenu;
