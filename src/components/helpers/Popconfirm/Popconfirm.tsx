import React, {ReactNode} from 'react';
import {message, Popconfirm} from 'antd';

interface IProps {
    onOk: () => void;
    children: ReactNode | ReactNode[];
    text: string;
    textDescription?: string;
    textTitle: string;
}

const Popover = ({children, onOk, text, textTitle, textDescription}:IProps) => {
    const confirm = () => {
        message.success(text);
        onOk()
    };

    const cancel = () => {
        message.error('Cancel');
    };
    return (
        <Popconfirm
            title={textTitle}
            description={textDescription}
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            {children}
        </Popconfirm>
    );
}


export default Popover;