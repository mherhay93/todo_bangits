import dayjs from "dayjs";

export interface IState {
    todo: IValue[]
}

export interface IValue {
    title:string,
    description:string
    date:dayjs.Dayjs,
    id:number | string
}
