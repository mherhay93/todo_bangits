import styled from "styled-components";

export const WrapperChildren = styled.form`
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
  max-width: 80vw;
  overflow: hidden;
  white-space: pre-wrap;
  gap: 8px;

  
  & :first-child {
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    max-width: 78vw;
  }
  
  & :last-child {
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    max-width: 70vw;
  }

  @media (max-width: 768px) {
    max-width: 60vw;
    & :first-child {
      font-size: 16px;
    }
  }

  @media (max-width: 520px) {
    max-width: 50vw;
    & :last-child {
      font-size: 14px;
    }
  }

  @media (max-width: 420px) {
    max-width: 40vw;
  }

  @media (max-width: 360px) {
    max-width: 30vw;
  }
`
