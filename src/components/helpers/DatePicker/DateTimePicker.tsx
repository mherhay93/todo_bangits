import React from 'react';
import dayjs from 'dayjs';
import {DatePicker, Space} from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type {RangePickerProps} from 'antd/es/date-picker';

dayjs.extend(customParseFormat);

const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current < dayjs().startOf('day');
};

interface IProps {
    name?: string,
    onChange?: (date:dayjs.Dayjs | null, dateString:string) => void,
    onBlur?: any,
    value: any
}

const DateTimePicker = ({name, onChange, onBlur, value}: IProps) => {
    return (
        <Space direction="vertical" size={12}>
            <DatePicker
                name={name}
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={disabledDate}
                showTime={{defaultValue: dayjs('00:00:00', 'HH:mm:ss')}}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
        </Space>
    )
};

export default DateTimePicker;
