import {WrapperHeader} from "./listItem.style";
import {Tag} from "antd";
import dayjs from "dayjs";
import {addWrap, checkStatus} from "../../utils";

interface IProps {
    title: string;
    description: string;
    date: dayjs.Dayjs;
    isChecked:boolean;
}

const HeaderList = ({title, description, date, isChecked}: IProps) => {
    const expired = (new Date().getTime() > new Date(date.toDate()).getTime())
    return (
        <WrapperHeader className={isChecked ? 'completed' : ''}>
            <Tag color={checkStatus(expired, isChecked)}>{addWrap(title)}</Tag>
            <span>
               {addWrap(description)}
            </span>
            <span>
                {date.format('DD-MM-YYYY HH:mm:ss')}
            </span>
        </WrapperHeader>
    )
}

export default HeaderList;
