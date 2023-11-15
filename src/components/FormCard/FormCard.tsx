import React from "react";
import {connect} from "react-redux";
import {Formik} from "formik";
import {Button, Input} from "antd";
import * as Yup from 'yup';
import dayjs from "dayjs";
import {v4 as uuidv4} from 'uuid';

import {addItemTodo} from "../../redux/todo/todo";
import DateTimePicker from "../helpers/DatePicker/DateTimePicker";
import {IValue} from "../../redux/types";
import {Error, Field, Form, FormBody} from "./formCard.style";

const {TextArea} = Input;

const TodoSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    date: Yup.string().required('Required')
});

interface IProps {
    addTodo: (val:IValue) => void
}

const FormCard = ({addTodo}: IProps) => {
    return (
        <div>
            <Formik
                initialValues={{title: '', description: '', date: '', id: ''}}
                validationSchema={TodoSchema}
                onSubmit={(values, {resetForm}) => {
                    values.id = uuidv4()
                    addTodo(values)
                    resetForm()
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isValid,
                      dirty,
                      setFieldValue
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormBody>
                            <Field>
                                <Input
                                    name="title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                />
                                {errors.title && touched.title ? (
                                    <Error>{errors.title}</Error>
                                ) : null}
                            </Field>
                            <Field>
                                <TextArea
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    rows={4}
                                />
                                {errors.description && touched.description ? (
                                    <Error>{errors.description}</Error>
                                ) : null}
                            </Field>
                            <DateTimePicker
                                name="date"
                                onChange={(date:dayjs.Dayjs | null) => setFieldValue("date", date)}
                                value={values.date}
                                onBlur={handleBlur}
                            />
                            <Button htmlType="submit" type="primary" block disabled={!(isValid && dirty)}>
                                Add new task
                            </Button>
                        </FormBody>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => {

    return {
        addTodo: (val:IValue) => dispatch(addItemTodo(val))
    }

}
export default connect(null, mapDispatchToProps)(FormCard);