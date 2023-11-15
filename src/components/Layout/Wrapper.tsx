import React, {ReactElement} from "react";
import {Layout} from "antd";
import {LayoutWrapper} from "./wrapper.style";

const {Content, Footer} = Layout;

interface IProps {
    children: ReactElement | ReactElement[]
}

const Wrapper = ({children}:IProps) => {
    return (
        <LayoutWrapper>
            <Content>
                {children}
            </Content>
            <Footer style={{textAlign: "center"}}>
                TODO LIST TEST TASK
            </Footer>
        </LayoutWrapper>
    );
};

export default Wrapper;
