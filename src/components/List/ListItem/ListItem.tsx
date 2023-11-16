import React, {useState} from 'react';
import {Collapse} from 'antd';
import {connect} from "react-redux";
import dayjs from "dayjs";
import {moveToTrash, setChecked, setTodo} from "../../../redux/todo/todo";
import {IValue} from "../../../redux/types";
import ItemChildren from "./ItemChildren";
import HeaderList from "./Header";
import IconBlock from "./IconBlock";

interface IProps {
    title: string;
    description: string;
    date: dayjs.Dayjs;
    itemKey: string | number;
    isChecked: boolean;
    setTodo: (val:IValue) => void
    moveToTrash: (val:number | string) => void
    setChecked: (data:{checked: boolean, id: number | string}) => void
}

const ListItem = ({title, description, date, isChecked, itemKey, setTodo, moveToTrash, setChecked}: IProps) => {
    const [activeKey, setActiveKey] = useState<string | number>('')
    const handleOpen = () => {
        if(!isChecked) {
            setActiveKey(itemKey)
        }
    }

    const handleDelete = () => {
        moveToTrash(itemKey)
    }
    const handleCheck = (checked: boolean) => {
        setChecked({checked, id: itemKey})
        if(checked) {
            setActiveKey(0)
        }
    }

    const handleSave = (val:IValue) => {
        setActiveKey(0)
        setTodo(val)
    }

    const item = [{
        key: itemKey,
        label:(
            <HeaderList
                title={title}
                description={description}
                date={date}
                isChecked={isChecked}
            />
        ),
        children: (
            <ItemChildren
                title={title}
                description={description}
                date={date}
                isChecked={isChecked}
                onSave={handleSave}
                id={itemKey}
            />
        )
    }]

    const createIcon = () => (
        <IconBlock
            handleOpen={handleOpen}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
        />
    )

    return (
        <Collapse
            items={item}
            expandIcon={createIcon}
            expandIconPosition="end"
            activeKey={activeKey}
            style={{overflow: "hidden"}}
        />
    )
};

const mapDispatchToProps = (dispatch:any) => {
  return {
      setTodo: (val:IValue) => dispatch(setTodo(val)),
      moveToTrash: (id:number | string) => dispatch(moveToTrash(id)),
      setChecked: (data:{checked: boolean, id: number | string}) => dispatch(setChecked(data))
  }
}

export default connect(null, mapDispatchToProps )(ListItem);
