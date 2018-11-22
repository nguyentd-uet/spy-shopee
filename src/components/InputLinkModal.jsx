import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const FormItem = Form.Item;

export default function InputLinkModal(props) {
    const [link, setLink] = useState('');

    const onSubmitLink = () => {
        props.handleOk(link);
    }

    const onChangeInput = (e) => {
        setLink(e.target.value);
    }

    return (
        <Modal
            title="Basic Modal"
            visible={props.visible}
            // onOk={() => props.handleOk()}
            // onCancel={() => props.handleCancel()}
            footer={[
                <Button key="back" onClick={() => props.handleCancel()}>Hủy bỏ</Button>,
                <Button key="submit" type="primary" onClick={() => onSubmitLink()}>
                    Xác nhận
                </Button>,
            ]}
        >
            <Form layout="vertical">
                <FormItem label="Link Shopee">
                    <Input value={link} onChange={onChangeInput.bind(this)} />
                </FormItem>
            </Form>
        </Modal>
    )
}
