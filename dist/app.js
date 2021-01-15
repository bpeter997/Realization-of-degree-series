"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let data = fs_1.default.readFileSync("./degree_series.txt", "utf8");
let tempArray = data.split(",");
let inputArray = tempArray.map((value) => +value);
let amount = 0;
let largestElement = 0;
inputArray.forEach((value) => {
    amount += value;
    if (value > largestElement)
        largestElement = value;
});
console.log(`A sorozat realizálható-e tetszőleges gráffal: ${amount % 2 == 0}`);
console.log(`A sorozat realizálható-e hurokélmentes gráffal: ${amount % 2 == 0 && amount - largestElement > largestElement}`);
hhMethod(inputArray);
function hhMethod(inputArray) {
    inputArray.sort(function (a, b) {
        return b - a;
    });
    console.log(`iteracios lepes: ${inputArray}`);
    if (inputArray.length <= 0 ||
        inputArray[0] > inputArray.length - 1 ||
        inputArray[inputArray.length - 1] < 0) {
        console.log(`A sorozat nem realizálható-e egyszerű gráffal`);
        return null;
    }
    if (inputArray[0] == 0 && inputArray[inputArray.length - 1] == 0) {
        console.log(`A sorozat realizálható egyszerű gráffal.`);
        return null;
    }
    let valueOfLargestElement = inputArray[0];
    inputArray.shift();
    for (let i = 0; i < valueOfLargestElement; i++) {
        inputArray[i] = inputArray[i] - 1;
    }
    return hhMethod(inputArray);
}
//# sourceMappingURL=app.js.map