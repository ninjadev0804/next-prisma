"use client";

import React from "react";
import { Spin } from "antd";

const Loading = () => {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<Spin />
		</div>
	);
};

export default Loading;
