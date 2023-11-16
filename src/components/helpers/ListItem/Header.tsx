import {WrapperHeader} from "./listItem.style";
import {Tag} from "antd";
import dayjs from "dayjs";
import {addWrap} from "../../utils";

interface IProps {
    title: string;
    description: string;
    date: dayjs.Dayjs;
}

const HeaderList = ({title, description, date}: IProps) => {
    return (
        <WrapperHeader>
            <Tag color={'green'}>{addWrap(title)}</Tag>
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
