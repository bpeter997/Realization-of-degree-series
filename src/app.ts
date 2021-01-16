import fs from "fs";

let path: string = "";

if (process.argv[2]) {
  path = process.argv[2].split("=")[1];
} else {
  throw new Error("No specified input direction.");
}

let data: string = fs.readFileSync(path, "utf8");
let tempArray: Array<string> = data.split(",");

let inputArray: Array<number> = tempArray.map((value: string) => +value);
let amount: number = 0;
let largestElement: number = 0;

inputArray.forEach((value: number) => {
  amount += value;
  if (value > largestElement) largestElement = value;
});

console.log(`A sorozat realizálható-e tetszőleges gráffal: ${amount % 2 == 0}`);
console.log(
  `A sorozat realizálható-e hurokélmentes gráffal: ${
    amount % 2 == 0 && amount - largestElement > largestElement
  }`
);

hhMethod(inputArray);

function hhMethod(inputArray: Array<number>): Array<number> {
  inputArray.sort(function (a, b) {
    return b - a;
  });

  console.log(`iteracios lepes: ${inputArray}`);

  if (
    inputArray.length <= 0 ||
    inputArray[0] > inputArray.length - 1 ||
    inputArray[inputArray.length - 1] < 0
  ) {
    console.log(`A sorozat nem realizálható-e egyszerű gráffal`);
    return null;
  }
  if (inputArray[0] == 0 && inputArray[inputArray.length - 1] == 0) {
    console.log(`A sorozat realizálható egyszerű gráffal.`);
    return null;
  }

  let valueOfLargestElement: number = inputArray[0];
  inputArray.shift();
  for (let i = 0; i < valueOfLargestElement; i++) {
    inputArray[i] = inputArray[i] - 1;
  }
  return hhMethod(inputArray);
}
