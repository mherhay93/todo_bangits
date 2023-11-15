import React from "react";
import {Formik} from "formik";
import {Button, Input} from "antd";
import * as Yup from 'yup';
import dayjs from "dayjs";
import DateTimePicker from "../helpers/DatePicker/DateTimePicker";
import {Form, FormBody, Error, Field} from "./formCard.style";

const {TextArea} = Input;

const TodoSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    date: Yup.string().required('Required')
});

const FormCard = () => {
    return (
        <div>
            <Formik
                initialValues={{title: '', description: '', date: ''}}
                validationSchema={TodoSchema}
                onSubmit={(values, {setSubmitting}) => {
                    console.log('values ------->', values)
                    setSubmitting(false)
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
                                onChange={(date:dayjs.Dayjs | null, dateString:string) => setFieldValue("date", date)}
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

export default FormCard;