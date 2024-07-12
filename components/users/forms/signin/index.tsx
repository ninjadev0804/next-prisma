"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Form, Input, notification } from "antd";
import Link from "next/link";

const ClientFormSignIn = () => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	const submitForm = async (values: { email_address: string; password: string }) => {
		setLoading(true);
		const response = await signIn("credentials", {
			email_address: values.email_address,
			password: values.password,
			redirect: false,
		});

		if (response?.status !== 200) {
			setLoading(false);
			return notification.error({ message: "Error Occur", description: "Invalid account please try again" });
		}

		router.push("/dashboard");
	};

	return (
		<Form
			layout="vertical"
			requiredMark="optional"
			autoComplete="off"
			className="w-full max-w-lg"
			onFinish={submitForm}>
			<Form.Item
				name="email_address"
				label="Email Address"
				rules={[
					{ type: "email", message: "invalid email address" },
					{ required: true, message: "required" },
				]}>
				<Input className="h-[40px]" />
			</Form.Item>
			<Form.Item name="password" label="Password" rules={[{ required: true, message: "required" }]}>
				<Input.Password className="h-[40px]" />
			</Form.Item>

			<div className="flex flex-col gap-y-4">
				<Button
					htmlType="submit"
					block
					type="primary"
					className="text-base font-bold h-[40px]"
					loading={loading}>
					Sign In
				</Button>
				<Link href="/signup">
					<Button block type="primary" ghost className="text-base font-normal h-[40px]">
						Sign Up
					</Button>
				</Link>
			</div>
		</Form>
	);
};

export default ClientFormSignIn;
