// *data types
// * numbers
// * strings
// * booleans 
var x = 10;
// * implicit typing
// determine the type on its own
// x= "123";
var y;
// type declaration
y = 10;
var z = 20;
//type declaration and assigning the value together
console.log(x);
// ts-node example.ts
// tsc example.ts
// npx tsc example.ts
var str;
str = "Hero";
var isAvailable = false;
if (isAvailable) {
    // do something
    isAvailable = false;
}
else {
    // wait for sometime
    console.log('is not available');
}
// * Arrays
// array of numbers
var list = [];
list.push(1);
list.push(2);
list.push(3);
var char = [];
char.push("12");
char.push("34");
char.push("56");
// 2D
var matrix = [[], []];
// matrix.push([]);
matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;
console.log(matrix);
// Constructor reference
// angle brackets
var bool = [false, true];
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
var tuple;
tuple = ["Tuple", 1];
// tuple[0]="Tuple2"
// console.log(tuple)
// * ENUMS
// C, Embedded C,
// Electronics / Sensors / Pointers
// Represent a data, but need to make sense out of it
// enumerators = 0,1,2,3,4
var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["GET_TODO_REQUEST"] = 0] = "GET_TODO_REQUEST";
    ActionTypes[ActionTypes["GET_TODO_SUCCESS"] = 1] = "GET_TODO_SUCCESS";
    ActionTypes[ActionTypes["GET_TODO_FAILURE"] = 2] = "GET_TODO_FAILURE";
})(ActionTypes || (ActionTypes = {}));
function reducer(action) {
    switch (action) {
        case ActionTypes.GET_TODO_REQUEST: {
            console.log('requesting data');
            break;
        }
        case ActionTypes.GET_TODO_SUCCESS: {
            console.log('data received');
            break;
        }
        case ActionTypes.GET_TODO_FAILURE: {
            console.log('data failed');
            break;
        }
    }
}
// reducer(1)
var action = ActionTypes.GET_TODO_REQUEST;
reducer(action);
// * null , undefined
var n = null;
var u = undefined;
// * void
// empty
// no return
function printData() {
    console.log("printing...");
    return 0;
}
printData();
function add(a, b) {
    // return a + b
    return Number("".concat(a + b));
}
console.log(add(1, 2));
// ! any
// ^ avoid
// loosing typescript powers
//* optional values
function printName(firstname, lastname) {
    if (!lastname) {
        return firstname;
    }
    return firstname + " " + lastname;
}
// let ret = printName("Satya","Mall");
var ret = printName("Satya", "");
console.log(ret);
function callback(value) {
    console.log(value);
}
var todoItem = {
    id: 1,
    title: "LEARN TYPESCRIPT",
    status: false,
    onClick: callback
};
todoItem.onClick(5000);
// * union, or / and
var users;
var variants;
var grids;
var user;
var myReducer = function (state, action) {
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
};
var response = {
    status: 200,
    data: [{
            id: 1,
            title: "LEARN TYPESCRIPT",
            status: false,
            onClick: callback
        }]
};
// interfaces
// types
// | & union, and
// optional functions
var Nodes = /** @class */ (function () {
    function Nodes(node) {
        this.node = node;
        this.id = new Date().toString();
    }
    return Nodes;
}());
// async function Sleep(){
//     await new Promise(resolve => setTimeout(resolve, 1000))
// }
// tsc example.ts --target ES2015
