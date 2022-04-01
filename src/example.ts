
// *data types

// * numbers
// * strings
// * booleans 

let x = 10;
// * implicit typing
// determine the type on its own
// x= "123";

let y: number;
// type declaration
y = 10;

let z: number = 20;
//type declaration and assigning the value together


console.log(x);

// ts-node example.ts
// tsc example.ts
// npx tsc example.ts

let str: string;
str = "Hero";
let isAvailable: boolean = false;

if (isAvailable) {
    // do something
    isAvailable = false;
}
else {
    // wait for sometime
    console.log('is not available')
}

// * Arrays
// array of numbers
let list: number[] = [];

list.push(1)
list.push(2)
list.push(3)

let char: string[] = [];

char.push("12")
char.push("34")
char.push("56")

// 2D

let matrix: number[][] = [[], []];

// matrix.push([]);

matrix[0][0] = 1
matrix[0][1] = 2
matrix[0][2] = 3
matrix[1][0] = 4
matrix[1][1] = 5
matrix[1][2] = 6

console.log(matrix);

// Constructor reference
// angle brackets
let bool: Array<boolean> = [false, true]

// class Example <T>{
//    val: T

// }

// const ex = new Example <string>()
// ex.val

// class LL{
//     val: Number
//     next: LL | null

//     constructor(val: number){
//         this.val = val
//         this.next = null
//     }

//     add(val: number){
//         this.next = new LL(val)
//     }
// }

// const ll = new LL(3)
// console.log(ll)

// ll.add(5)
// console.log(ll)


// * TUPLES
let tuple: [string, number]
tuple = ["Tuple", 1]

// tuple[0]="Tuple2"
// console.log(tuple)

// * ENUMS

// C, Embedded C,
// Electronics / Sensors / Pointers

// Represent a data, but need to make sense out of it
// enumerators = 0,1,2,3,4
enum ActionTypes {
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
    GET_TODO_FAILURE
}

function reducer(action: ActionTypes) {
    switch (action) {
        case ActionTypes.GET_TODO_REQUEST: {
            console.log('requesting data')
            break;
        }
        case ActionTypes.GET_TODO_SUCCESS: {
            console.log('data received')
            break;
        }
        case ActionTypes.GET_TODO_FAILURE: {
            console.log('data failed')
            break;
        }
    }
}

// reducer(1)
const action = ActionTypes.GET_TODO_REQUEST;
reducer(action)


// * null , undefined
let n: null = null;
let u: undefined = undefined;


// * void
// empty
// no return
function printData(): number {
    console.log("printing...")
    return 0
}
printData()

function add(a: number, b: number): number {
    // return a + b
    return Number(`${a + b}`);
}

console.log(add(1, 2));

// ! any
// ^ avoid
// loosing typescript powers

//* optional values

function printName(firstname: string, lastname: string): string {
    if (!lastname) {
        return firstname
    }
    return firstname + " " + lastname
}

// let ret = printName("Satya","Mall");
let ret = printName("Satya", "");
console.log(ret);

// * data types
// * arrays
// * tuples
// * enums
// * null, undefined
// !any
// * void in functions
// * optional values

// * Objects

// * interface
interface TodoItem {
    id: number;
    title: string;
    status: boolean;
    onClick: (id: number) => void;
}

function callback(value: number) {
    console.log(value)
}

const todoItem: TodoItem = {
    id: 1,
    title: "LEARN TYPESCRIPT",
    status: false,
    onClick: callback
}

todoItem.onClick(5000)


// * union, or / and
let users: "admin" | "user" | "superadmin";

let variants: "h1" | "h2" | "h3";

let grids: 1 | 2 | 3;


// * type
type Users = "admin" | "user" | "superadmin";

let user: Users;

type ActionTypes2 = "GET_TODO_REQUEST" | "GET_TODO_SUCCESS" | "GET_TODO_FAILURE";

type State = {
    todos?: TodoItem[] | null;
    isLoading?: boolean | null;
    isError?: boolean | null;
}

type Actions = {
    type: ActionTypes2;
    payload: State;
}

const myReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "GET_TODO_REQUEST": {
            break;
        }
        case "GET_TODO_SUCCESS": {
            break;
        }
        case "GET_TODO_FAILURE": {
            break;
        }
    }
}

// myReducer( { }, {type: "GET_TODO_FAILURE", payload: {isLoading: true}})

// &
// and

interface Response200 {
    status: 200 | 201 | 404 | 500,
    error?: "network error" | "no data"
}

interface TodoResponse {
    data: TodoItem[]
}

type TodoResponseActions = Response200 & TodoResponse;

const response : TodoResponseActions = {
    status: 200,
    data: [{
        id: 1,
        title: "LEARN TYPESCRIPT",
        status: false,
        onClick: callback
    }]
}

// interfaces
// types
// | & union, and
// optional functions

class Nodes<T>{
    node: T
    id: string
    constructor(node: T){
        this.node = node
        this.id = new Date().toString()
    }
}

// async function Sleep(){
//     await new Promise(resolve => setTimeout(resolve, 1000))
// }

// tsc example.ts --target ES2015
// tsc example.ts --target es3