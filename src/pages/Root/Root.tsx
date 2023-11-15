import React from "react";
import {WrapperComponent} from "./root.style";
import Wrapper from "../../components/Layout/Wrapper";
import FormCard from "../../components/FormCard/FormCard";
import List from "../../components/List/List";

const Root: React.FC = () => {
    return (
        <Wrapper>
            <WrapperComponent>
                <FormCard/>
            </WrapperComponent>
            <WrapperComponent>
                <List/>
            </WrapperComponent>
        </Wrapper>
    
    )
}

export default Root;
