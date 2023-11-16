import styled from "styled-components";

export const WrapperChildren = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ChildrenBody = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 20px;
  margin-bottom: 0;
  gap: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    gap: 10px;
    flex-direction: column;
    width: 100%;
  }
`

export const LabelItem = styled.label`
  width: 100%;
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
