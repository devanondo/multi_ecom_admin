import { Modal } from 'antd';
import React from 'react';

interface ICommonMoal {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string | React.ReactNode;
    loading?: boolean;
    children: React.ReactNode;
}

const CommonMoal: React.FC<ICommonMoal> = ({
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
        >
            {children}
        </Modal>
    );
};

export default CommonMoal;
