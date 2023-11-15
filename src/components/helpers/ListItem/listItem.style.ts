import styled from "styled-components";

export const WrapperChildren = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ChildrenBody = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const LabelItem = styled.label`

`

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  
  & :first-child {
    font-size: 18px;
    font-weight: bold;
  }
  
  & :last-child {
    font-weight: bold;
  }
`
