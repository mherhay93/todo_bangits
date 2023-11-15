import {LabelItem, WrapperChildren, ChildrenBody} from "./listItem.style";
import {Button, Input, Typography} from "antd";
import dayjs from "dayjs";
import DateTimePicker from "../DatePicker/DateTimePicker";

const {TextArea} = Input;

interface IProps {
    title: string;
    description: string;
    date: dayjs.Dayjs
}

const ItemChildren = ({title, description, date}: IProps) => {
    return (
        <WrapperChildren>
            <ChildrenBody>
                <LabelItem>
                    <Typography>Title</Typography>
                    <Input value={title}/>
                </LabelItem>
                <LabelItem>
                    <Typography>Description</Typography>
                    <TextArea value={description}/>
                </LabelItem>
                <LabelItem>
                    <Typography>Date</Typography>
                    <DateTimePicker
                        value={date}
                    />
                </LabelItem>
            </ChildrenBody>
            <Button type="primary">Save</Button>
        </WrapperChildren>
    )
}

export default ItemChildren;
