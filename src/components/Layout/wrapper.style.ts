import {Layout} from "antd";
import styled from "styled-components";

export const LayoutWrapper = styled(Layout)`
  padding: 10px 20vw;

  @media (max-width: 1440px) {
    padding: 10px 14vw;
  }

  @media (max-width: 1200px) {
    padding: 10px 10vw;
  }

  @media (max-width: 1024px) {
    padding: 10px 2vw;
  }
`
