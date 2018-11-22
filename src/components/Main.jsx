import React, { useState } from 'react';
import { Button, Table } from 'antd';
import InputLinkModal from './InputLinkModal';
import ExportProduct from './ExportProduct';

const data= [{
    key: '1',
    shopName: 'Backup ngày 21/8/2018',
    quantity: 32,
    pricePlus: 5,
    weight: 100,
    createdDate: '2018-08-21 03:39:28',
    status: 1
}, {
    key: '2',
    shopName: 'Backup ngày 21/8/2018',
    quantity: 100,
    pricePlus: 0,
    weight: 150,
    createdDate: '2018-08-21 03:36:28',
    status: 1
}];

const columns = [{
    title: 'Shop',
    dataIndex: 'shopName',
    key: 'shopName',
}, {
    title: 'Số lượng sản phẩm',
    dataIndex: 'quantity',
    key: 'quantity',
}, {
    title: 'Giá cộng thêm',
    dataIndex: 'pricePlus',
    key: 'pricePlus',
}, {
    title: 'Khối lượng',
    dataIndex: 'weight',
    key: 'weight'
}, {
    title: 'Ngày tạo',
    dataIndex: 'createdDate',
    key: 'createdDate'
}, {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status'
}];

export default function Main(props) {
    const [visible, setVisible] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const showModal = () => {
        setVisible(true);
    }

    const handleOk = (link) => {
        console.log(link);
        setVisible(false);
        setIsSubmit(true);
        
    }

    const handleCancel = () => {
        setVisible(false);
    }

    return (
        <div>
            {
                isSubmit ? 
                <ExportProduct />
                :
                <div>
                    <Button type="primary" style={{marginBottom: '10px'}} onClick={() => showModal()}>+ Tạo Backup mới</Button>
                    <InputLinkModal visible={visible} 
                        handleOk={handleOk.bind(this)} 
                        handleCancel={() => handleCancel()} 
                    />
                    <Table bordered columns={columns} dataSource={data} />
                </div>
            }
        </div>
    )
}
