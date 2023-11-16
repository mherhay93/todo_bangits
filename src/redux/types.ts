import dayjs from "dayjs";

export interface IState {
    todo: IValue[];
    trash: IValue[];
    modalVisible: boolean;
}

export interface IValue {
    title:string;
    description:string;
    date:dayjs.Dayjs;
    isChecked: boolean;
    id:number | string;
}


export interface IStore {
    todo: IState
}