import styled from "styled-components";
import {Typography} from "antd";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Error = styled(Typography)`
  font-size: 10px;
  color: tomato;
`
