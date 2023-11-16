import {Card} from "antd";
import {IValue} from "../../redux/types";
import {CardBody, Title} from "./trash.style";
import Buttons from "./Buttons";

interface IProps {
    item: IValue;
}
const ItemTrash = ({item}: IProps) => {
    const {title, description, date, id} = item

    return (
        <Card
            title={<Title>{title}</Title>}
            extra={<Buttons itemId={id}/>}
        >
            <CardBody>
                <span>{description}</span>
                <span>{date.format('DD-MM-YYYY HH:mm:ss')}</span>
            </CardBody>
        </Card>
    )
}
export default ItemTrash;