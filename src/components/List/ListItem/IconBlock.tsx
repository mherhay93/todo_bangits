import React from "react";
import {DeleteTwoTone, EditTwoTone} from "@ant-design/icons";
import {WrapperIcons} from "./listItem.style";
import {Switch} from "antd";

interface IProps {
    handleOpen: () => void
    handleDelete: () => void
    handleCheck: (v:boolean) => void
}

const IconBlock = ({handleOpen, handleDelete, handleCheck}: IProps) => {
    return (
        <WrapperIcons>
            <EditTwoTone
                onClick={handleOpen}
                style={{fontSize: 20}}
            />
            <DeleteTwoTone
                onClick={handleDelete}
                style={{fontSize: 20}}
            />
            <Switch
                checkedChildren="X"
                unCheckedChildren="V"
                onChange={handleCheck}
            />
        </WrapperIcons>

    )
}

export default IconBlock;