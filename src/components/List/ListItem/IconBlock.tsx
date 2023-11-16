import React from "react";
import {DeleteTwoTone, EditTwoTone} from "@ant-design/icons";
import {WrapperIcons} from "./listItem.style";
import {Switch} from "antd";
import Popover from "../../helpers/Popconfirm/Popconfirm";

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
            <Popover
                onOk={handleDelete}
                text={'Task moved to trash'}
                textTitle={'Do you want to move the task to the trash'}

            >
                <DeleteTwoTone
                    style={{fontSize: 20}}
                />
            </Popover>
            <Switch
                checkedChildren="X"
                unCheckedChildren="V"
                onChange={handleCheck}
            />
        </WrapperIcons>

    )
}

export default IconBlock;