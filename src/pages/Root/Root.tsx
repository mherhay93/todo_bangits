import React from "react";
import {FloatButton} from "antd";
import {connect} from "react-redux";
import {DeleteOutlined} from "@ant-design/icons";
import Wrapper from "../../components/Layout/Wrapper";
import FormCard from "../../components/FormCard/FormCard";
import List from "../../components/List/List";
import ModalTrash from "../../components/ModalTrash/Modal";
import {IStore} from "../../redux/types";
import {setModalVisible} from "../../redux/todo/todo";
import {Title, WrapperComponent} from "./root.style";

interface IProps {
    setModalVisible: (isOpen: boolean) => void
    modalVisible: boolean
}

const Root = ({setModalVisible, modalVisible}:IProps) => {
    const handleClickModal = () => {
        setModalVisible(!modalVisible)
    }
    
    return (
        <Wrapper>
            <WrapperComponent>
                <Title>
                    Todo
                </Title>
                <FormCard/>
            </WrapperComponent>
            <WrapperComponent>
                <Title>
                    List
                </Title>
                <List/>
            </WrapperComponent>
            <FloatButton
                onClick={handleClickModal}
                icon={<DeleteOutlined />}
                type="primary"
                style={{ right: 94 }}
            />
            <ModalTrash
                modalVisible={modalVisible}
                onClick={handleClickModal}
            />
        </Wrapper>
    
    )
}

const mapStateToProps = (todo:IStore) => {
    const {modalVisible} = todo.todo
    return {
      modalVisible
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
      setModalVisible: (isOpen:boolean) => dispatch(setModalVisible(isOpen))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Root);
