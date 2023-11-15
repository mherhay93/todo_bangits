import React, {useState} from 'react';
import {Collapse} from 'antd';
import dayjs from "dayjs";
import {EditTwoTone} from "@ant-design/icons";
import ItemChildren from "./ItemChildren";
import HeaderList from "./Header";

interface IProps {
    title: string;
    description: string;
    date: dayjs.Dayjs;
    key: string | number
}

const ListItem = ({title, description, date, key}: IProps) => {
    const [activeKey, setActiveKey] = useState<string | number>('')
    const handleOpen = () => {
        setActiveKey(key)
    }
    
    return (
        <Collapse
            items={[{
                key,
                label:(
                    <HeaderList
                        title={title}
                        description={description}
                    />
                ),
                children: (
                    <ItemChildren
                        title={title}
                        description={description}
                        date={date}
                    />
                )
            }]}
            expandIcon={() => (
                <EditTwoTone
                    onClick={handleOpen}
                    style={{fontSize: 20}}
                />)}
            expandIconPosition="end"
            activeKey={activeKey}
            style={{overflow: "hidden"}}
        />
    )
};

export default ListItem;
