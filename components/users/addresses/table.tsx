"use client";

import type { DataType } from "@/types";
import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const AddressTable = ({ setData, data, getAddresses, findEditAddr }: { setData: any, data: any, getAddresses: any, findEditAddr: any }) => {

    const columns: ColumnsType<DataType> = [
        {
            title: '#',
            width: 100,
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'Full Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Company Name',
            width: 100,
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'City',
            width: 100,
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'State',
            width: 100,
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (record: DataType) =>
                <Button className='bg-blue-500' type="primary" onClick={() => findEditAddr(record.key)}>
                    Edit
                </Button>
            ,
        },
    ];

    useEffect(() => {
        getAddresses();
    }, [])

    return (
        <Table
            columns={columns}
            dataSource={data}
        />
    );
};

export default AddressTable;