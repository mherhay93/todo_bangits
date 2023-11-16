import {LabelItem, WrapperChildren, ChildrenBody} from "./listItem.style";
import {Button, Input, Typography} from "antd";
import dayjs from "dayjs";
import {Formik} from "formik";
import {IValue} from "../../../redux/types";
import DateTimePicker from "../../helpers/DatePicker/DateTimePicker";

const {TextArea} = Input;

interface IProps {
    title: string;
    description: string;
    date: dayjs.Dayjs;
    isChecked: boolean;
    id: number | string;
    onSave: (val:IValue) => void
}

const ItemChildren = ({title, description, date, id, isChecked, onSave}: IProps) => {

    return (
        <Formik
            initialValues={{title, description, date, id, isChecked}}
            onSubmit={(values) => {
                onSave(values)
            }}

        >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue
            }) => (
                <WrapperChildren onSubmit={handleSubmit}>
                    <ChildrenBody>
                        <LabelItem>
                            <Typography>Title</Typography>
                            <Input
                                name="title"
                                placeholder="Title..."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                        </LabelItem>
                        <LabelItem>
                            <Typography>Description</Typography>
                            <TextArea
                                name="description"
                                placeholder="Description..."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                        </LabelItem>
                        <LabelItem>
                            <Typography>Date</Typography>
                            <DateTimePicker
                                name="date"
                                onChange={(date:dayjs.Dayjs | null) => setFieldValue("date", date)}
                                value={values.date}
                                onBlur={handleBlur}
                            />
                        </LabelItem>
                    </ChildrenBody>
                    <Button htmlType="submit" type="primary">Save</Button>
                </WrapperChildren>
            )}
        </Formik>

    )
}

export default ItemChildren;
