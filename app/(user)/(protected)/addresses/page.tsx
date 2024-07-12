"use client";

import { prisma } from "@/prisma/client";
import APP from "@/config";
import type { DataType } from "@/types";
import React, { useState } from 'react';
import AddressTable from "@/components/users/addresses/table";
import AddressModal from "@/components/users/addresses/AddressModal";

const Addresses = () => {
	const [data, setData] = useState<DataType[]>([]);
	const [isEdit, setEdit] = useState(false);
	const [selectedAddr, setSelectedAddr] = useState<DataType[]>();

	const getAddresses = async () => {
		try {
			const addresses = await fetch(`${APP.URL}/api/addresses/read`, {
				method: "GET",
				cache: "no-store",
				headers: {
					accept: "application/json",
				},
			});
			const addrData = await addresses.json();
			let newArr: DataType[] = [];
			for (let i = 0; i < addrData.length; i++) {
				newArr.push({
					key: addrData[i].id,
					no: i,
					name: addrData[i].full_name,
					company: addrData[i].company_name,
					city: addrData[i].city_name,
					state: addrData[i].state_code,
				});
			}
			setData([...newArr]);
		} catch (error) {
			console.log("err => ", error);
		}
	}

	const findEditAddr = async (id: string) => {
        try {
            const selectedAddress = await fetch(`${APP.URL}/api/addresses/findaddress`, {
                method: "POST",
                cache: "no-store",
                headers: {
                    accept: "application/json",
                },
                body: JSON.stringify({ id: id }),
            });
            const addrData = await selectedAddress.json();
			setSelectedAddr(addrData);
			setEdit(true);
        } catch (error) {
            console.log("err => ", error);
        }
    }

	return (
		<div className="p-5">
			<div className="my-4">
				<AddressModal getAddresses={getAddresses} isEdit={isEdit} setEdit={setEdit} selectedAddr={selectedAddr} />
			</div>
			<div>
				<AddressTable data={data} setData={setData} getAddresses={getAddresses} findEditAddr={findEditAddr} />
			</div>
		</div>
	);
};

export default Addresses;