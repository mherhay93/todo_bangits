import {DeleteOutlined, RetweetOutlined} from "@ant-design/icons";
import React from "react";
import {connect} from "react-redux";
import {deleteItem, returnTodo} from "../../redux/todo/todo";
import {WrapperButtons} from "./trash.style";
import Popconfirm from "../helpers/Popconfirm/Popconfirm";

interface IProps {
    returnTodo: (id: number | string) => void;
    deleteItem: (id: number | string) => void;
    itemId: number | string
}

const Buttons = ({returnTodo, deleteItem, itemId}: IProps) => {
    const handleReturn = () => {
        returnTodo(itemId)
    }

    const handleDelete = () => {
      deleteItem(itemId)
    }

    return (
        <WrapperButtons>
            <RetweetOutlined
                onClick={handleReturn}
                style={{fontSize: 20}}
            />
            <Popconfirm
                onOk={handleDelete}
                text="Task is deleted"
                textDescription="Are you sure to delete this task?"
                textTitle="Delete the task"
            >
                <DeleteOutlined
                    style={{fontSize: 20}}
                />
            </Popconfirm>
        </WrapperButtons>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        returnTodo: (id: number | string) => dispatch(returnTodo(id)),
        deleteItem: (id: number | string) => dispatch(deleteItem(id)),
    }
}

export default connect(null, mapDispatchToProps)(Buttons);