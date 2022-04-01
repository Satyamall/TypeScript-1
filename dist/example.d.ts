declare let x: number;
declare let y: number;
declare let z: number;
declare let str: string;
declare let isAvailable: boolean;
declare let list: number[];
declare let char: string[];
declare let matrix: number[][];
declare let bool: Array<boolean>;
declare let tuple: [string, number];
declare enum ActionTypes {
    GET_TODO_REQUEST = 0,
    GET_TODO_SUCCESS = 1,
    GET_TODO_FAILURE = 2
}
declare function reducer(action: ActionTypes): void;
declare const action = ActionTypes.GET_TODO_REQUEST;
declare let n: null;
declare let u: undefined;
declare function printData(): number;
declare function add(a: number, b: number): number;
declare function printName(firstname: string, lastname: string): string;
declare let ret: string;
interface TodoItem {
    id: number;
    title: string;
    status: boolean;
    onClick: (id: number) => void;
}
declare function callback(value: number): void;
declare const todoItem: TodoItem;
declare let users: "admin" | "user" | "superadmin";
declare let variants: "h1" | "h2" | "h3";
declare let grids: 1 | 2 | 3;
declare type Users = "admin" | "user" | "superadmin";
declare let user: Users;
declare type ActionTypes2 = "GET_TODO_REQUEST" | "GET_TODO_SUCCESS" | "GET_TODO_FAILURE";
declare type State = {
    todos?: TodoItem[] | null;
    isLoading?: boolean | null;
    isError?: boolean | null;
};
declare type Actions = {
    type: ActionTypes2;
    payload: State;
};
declare const myReducer: (state: State, action: Actions) => void;
interface Response200 {
    status: 200 | 201 | 404 | 500;
    error?: "network error" | "no data";
}
interface TodoResponse {
    data: TodoItem[];
}
declare type TodoResponseActions = Response200 & TodoResponse;
declare const response: TodoResponseActions;
declare class Nodes<T> {
    node: T;
    id: string;
    constructor(node: T);
}
declare function Sleep(): Promise<void>;
