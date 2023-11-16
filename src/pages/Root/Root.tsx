import React from "react";
import Wrapper from "../../components/Layout/Wrapper";
import FormCard from "../../components/FormCard/FormCard";
import List from "../../components/List/List";
import {Title, WrapperComponent} from "./root.style";

const Root: React.FC = () => {
    return (
        <Wrapper>
            <WrapperComponent>
                <Title color="">
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
        </Wrapper>
    
    )
}

export default Root;
