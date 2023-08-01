import { Modal } from 'antd';
import React from 'react';

interface IAddressModal {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string | React.ReactNode;
    loading?: boolean;
    children: React.ReactNode;
}

const AddressModal: React.FC<IAddressModal> = ({
    open,
    setOpen,
    title,
    loading,
    children,
}) => {
    const handleCancel = () => {
        setOpen(false);
    };

    const handleOk = () => {
        setOpen(false);
    };

    return (
        <Modal
            title={title}
            open={open}
            onOk={handleOk}
            confirmLoading={loading}
            onCancel={handleCancel}
            footer={[]}
        >
            {children}
        </Modal>
    );
};

export default AddressModal;
