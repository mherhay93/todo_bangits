import {connect} from "react-redux";
import {IStore, IValue} from "../../redux/types";
import ItemTrash from "./ItemTrash";

interface IProps {
    trashList: IValue[]
}

const Trash = ({trashList}:IProps) => {
    return (
        <div>
            {trashList.map(item => <ItemTrash key={item.id} item={item}/>)}
        </div>
    )
}

const mapStateToProps = (todo:IStore) => {
    const {trash} = todo.todo
  return {
      trashList: trash
  }
}
export default connect(mapStateToProps)(Trash);