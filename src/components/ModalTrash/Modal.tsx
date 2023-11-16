import {Modal} from 'antd';
import Trash from "./Trash";

interface IProps {
    modalVisible: boolean;
    onClick: () => void;
}

const ModalTrash = ({modalVisible, onClick}: IProps) => {
    const handleCancel = () => {
        onClick();
    };

    return (
        <Modal
            open={modalVisible}
            title="Trash"
            onCancel={handleCancel}
            footer={null}
        >
            <Trash />
        </Modal>
    );
};

export default ModalTrash;