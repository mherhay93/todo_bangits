import {connect} from "react-redux";
import {IState, IValue} from "../../redux/types";
import ListItem from "../helpers/ListItem/ListItem";

interface IProps {
    todoList: IValue[] | []
}

interface IStateProps {
    todo:IState
}

const List = ({todoList}:IProps) => {
    return (
        <div>
            {todoList.map(item => (
                <ListItem
                    key={item.id}
                    description={item.description}
                    title={item.title}
                    date={item.date}
                />))}
        </div>
    )
}

const mapStateToProps = ({todo}:IStateProps) => {
    return {
      todoList: todo.todo
    }
}

export default connect(mapStateToProps)(List);
