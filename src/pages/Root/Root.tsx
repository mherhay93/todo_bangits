import React from "react";
import {WrapperComponent} from "./root.style";
import Wrapper from "../../components/Layout/Wrapper";
import FormCard from "../../components/FormCard/FormCard";

const Root: React.FC = () => {
    return (
        <Wrapper>
            <WrapperComponent>
                <FormCard/>
            </WrapperComponent>
        </Wrapper>
    
    )
}

export default Root;
