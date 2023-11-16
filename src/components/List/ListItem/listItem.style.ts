import styled from "styled-components";

export const WrapperChildren = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ChildrenBody = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`

export const LabelItem = styled.label`

`

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 46vw;
  overflow: hidden;
  white-space: pre-wrap;
  gap: 8px;
  &.completed {
    text-decoration: line-through;
  }

  
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
    max-width: 40vw;
  }

  @media (max-width: 768px) {
    max-width: 30vw;
    & :first-child {
      font-size: 16px;
    }
  }

  @media (max-width: 520px) {
    max-width: 20vw;
    & :last-child {
      font-size: 14px;
    }
  }

  @media (max-width: 420px) {
    max-width: 18vw;
  }

  @media (max-width: 360px) {
    max-width: 12vw;
  }
`

export const WrapperIcons = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`
