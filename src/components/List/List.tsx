import {connect} from "react-redux";
import {IState, IValue} from "../../redux/types";
import ListItem from "../helpers/ListItem/ListItem";
import {WrapperList} from "./list.style";

interface IProps {
    todoList: IValue[] | []
}

interface IStateProps {
    todo:IState
}

const List = ({todoList}:IProps) => {
    return (
        <WrapperList>
            {todoList.map(item => (
                <ListItem
                    key={item.id}
                    itemKey={item.id}
                    description={item.description}
                    title={item.title}
                    date={item.date}
                />))}
        </WrapperList>
    )
}

const mapStateToProps = ({todo}:IStateProps) => {
    return {
      todoList: todo.todo
    }
}

export default connect(mapStateToProps)(List);
