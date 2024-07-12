"use client";

import APP from "@/config";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { SubmitFormProps } from "@/types";
import { Button, Form, Input, notification } from "antd";
import Link from "next/link";

const ClientFormSignUp = () => {
	const router = useRouter();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState<boolean>(false);

	/**
	 * HANDLE FORM SUBMIT
	 * @param values
	 */
	const submitForm = async (values: SubmitFormProps) => {
		setLoading(true);

		const response = await fetch(`${APP.URL}/api/user`, {
			method: "POST",
			cache: "no-store",
			headers: {
				accept: "application/json",
			},
			body: JSON.stringify(values),
		});

		const data = await response.json();

		if (response.status !== 200) {
			setLoading(false);
			return notification.error({ message: "Error Occur", description: data.message, duration: 5 });
		}

		notification.success({
			message: "Success",
			description: "Please check your main inbox for verification link",
			duration: 4,
		});
		router.push("/signin");
	};

	return (
		<Form
			form={form}
			layout="vertical"
			requiredMark="optional"
			onFinish={submitForm}
			className="w-full max-w-lg"
			autoComplete="off">
			<Form.Item name="first_name" label="First Name" rules={[{ required: true, message: "required" }]}>
				<Input placeholder="Elon" className="h-[40px]" />
			</Form.Item>
			<Form.Item name="last_name" label="Last Name" rules={[{ required: true, message: "required" }]}>
				<Input placeholder="Musk" className="h-[40px]" />
			</Form.Item>
			<Form.Item
				name="email_address"
				label="Email Address"
				rules={[
					{ required: true, message: "required" },
					{ type: "email", message: "Invalid email address" },
				]}>
				<Input placeholder="example@domain.com" className="h-[40px]" />
			</Form.Item>
			<Form.Item name="password" label="Password" rules={[{ required: true, message: "required" }]}>
				<Input.Password placeholder="*******" className="h-[40px]" />
			</Form.Item>

			<div className="flex flex-col gap-y-4">
				<Button htmlType="submit" block type="primary" className="h-[40px] font-bold" loading={loading}>
					Sign Up
				</Button>
				<Link href="/signin">
					<Button block type="primary" ghost className="text-base font-normal h-[40px]">
						Sign In
					</Button>
				</Link>
			</div>
		</Form>
	);
};

export default ClientFormSignUp;
