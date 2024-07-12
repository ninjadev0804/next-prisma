"use client";

import Link from "next/link";
import type { MenuProps } from "antd";
import React, { useContext } from "react";
import { ThemeContext } from "@/provider/theme";
import { Avatar, Badge, Button, Dropdown, Tag } from "antd";
import {
	BellOutlined,
	HistoryOutlined,
	InfoCircleOutlined,
	LogoutOutlined,
	MenuFoldOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons";

const UserHeader = () => {
	const { collapsed, setCollapsed } = useContext(ThemeContext);

	const items: MenuProps["items"] = [
		{
			type: "group",
			label: <span className="text-xs uppercase">My Profile</span>,
			children: [
				{
					key: "view_account",
					label: (
						<Link href="/profile">
							<div className="w-[150px] flex items-center  gap-x-3 text-base">
								<UserOutlined />
								<span>View Profile</span>
							</div>
						</Link>
					),
				},
				{
					key: "settings",
					label: (
						<Link href="/profile/settings">
							<div className="w-[150px] flex items-center  gap-x-3 text-base">
								<SettingOutlined />
								<span>My Settings</span>
							</div>
						</Link>
					),
				},
				{
					key: "referral",
					label: (
						<Link href="/profile/history">
							<div className="w-[150px] flex items-center  gap-x-3 text-base">
								<HistoryOutlined />
								<span>Login History</span>
							</div>
						</Link>
					),
				},
			],
		},
		{
			type: "group",
			label: <span className="text-xs uppercase">Contact</span>,
			children: [
				{
					key: "contact",
					label: (
						<Link href="/support">
							<div className="w-[150px] flex items-center  gap-x-3 text-base">
								<InfoCircleOutlined />
								<span>Support</span>
							</div>
						</Link>
					),
				},
				{
					key: "logout",
					label: (
						<div className="w-[150px] flex items-center  gap-x-3 text-base">
							<LogoutOutlined />
							<span>Logout</span>
						</div>
					),
				},
			],
		},
	];

	const NotificationRender = () => {
		return (
			<div className="h-[200px] w-[300px] bg-white shadow-lg">
				<div className="flex items-center justify-between">
					<span>Notification</span>
				</div>
			</div>
		);
	};

	return (
		<div className="flex items-center justify-between w-full h-full">
			<div className="flex gap-x-3">
				<Button
					type="primary"
					ghost
					className="flex items-center justify-center text-base"
					icon={<MenuFoldOutlined />}
					onClick={() => setCollapsed(!collapsed)}
				/>

				<Button className="text-base capitalize" type="primary" ghost>
					import csv
				</Button>
				<Button className="text-base capitalize" type="primary" ghost>
					new label
				</Button>
			</div>

			<div className="flex items-center gap-x-3">
				<Tag color="blue">$30.00</Tag>
				<Dropdown arrow placement="topRight" trigger={["click"]} dropdownRender={() => <NotificationRender />}>
					<Badge count={5}>
						<Button type="link" className="flex items-center justify-center text-[22px] px-0">
							<BellOutlined />
						</Button>
					</Badge>
				</Dropdown>
				<Dropdown menu={{ items }} arrow placement="topRight" trigger={["click"]}>
					<div className="flex cursor-pointer gap-x-2">
						<div className="flex flex-col items-end justify-center ml-3">
							<span className="text-xs leading-none text-gray-400">UID187</span>
							<span className="text-lg leading-none">Sakib Hasan</span>
						</div>
						<Avatar icon={<UserOutlined />} className="bg-blue-500" />
					</div>
				</Dropdown>
			</div>
		</div>
	);
};

export default UserHeader;
