"use client";

import { FaqProps } from "@/pages/api/faq";
import { Collapse } from "antd";
const { Panel } = Collapse;

const ClientColapse = ({ data }: { data: FaqProps[] }) => {
	return (
		<Collapse defaultActiveKey={["1"]}>
			{data.map((faq) => {
				return (
					<Panel key={faq.id} header={faq.title}>
						<p>{faq.content}</p>
					</Panel>
				);
			})}
		</Collapse>
	);
};

export default ClientColapse;
