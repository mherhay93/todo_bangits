export interface IState {
    todo: IValue[]
}

export interface IValue {
    title:string,
    description:string
    date:string,
    id:number | string
}