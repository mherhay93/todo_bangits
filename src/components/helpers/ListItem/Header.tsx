import {WrapperHeader} from "./listItem.style";
import {Tag} from "antd";

interface IProps {
    title:string;
    description:string
}

const HeaderList = ({title, description}:IProps) => {
    return (
        <WrapperHeader>
            <Tag color={'green'}>{title}</Tag>
            <span>{description}</span>
        </WrapperHeader>
    )
}

export default HeaderList;
