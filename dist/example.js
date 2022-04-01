// *data types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function Sleep() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
