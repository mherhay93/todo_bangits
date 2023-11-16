import React, {useState} from 'react';
import {Collapse} from 'antd';
import {connect} from "react-redux";
import dayjs from "dayjs";
import {EditTwoTone} from "@ant-design/icons";
import {setTodo} from "../../../redux/todo/todo";
import {IValue} from "../../../redux/types";
import ItemChildren from "./ItemChildren";
import HeaderList from "./Header";

interface IProps {
    title: string;
    description: string;
    date: dayjs.Dayjs;
    itemKey: string | number;
    setTodo: (val:IValue) => void
}

const ListItem = ({title, description, date, itemKey, setTodo}: IProps) => {
    const [activeKey, setActiveKey] = useState<string | number>('')
    const handleOpen = () => {
        setActiveKey(itemKey)
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
            />
        ),
        children: (
            <ItemChildren
                title={title}
                description={description}
                date={date}
                onSave={handleSave}
                id={itemKey}
            />
        )
    }]

    const createIcon = () => {
      return (
          <EditTwoTone
              onClick={handleOpen}
              style={{fontSize: 20}}
          />
      )
    }

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
      setTodo: (val:IValue) => dispatch(setTodo(val))
  }
}

export default connect(null, mapDispatchToProps )(ListItem);
