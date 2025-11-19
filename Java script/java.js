let numberOne = 11;
let numberTwo = 7;
if (numberOne > numberTwo) {
  console.log("1.", numberOne);
} else if (numberOne < numberTwo) {
  console.log("1.", numberTwo);
}

let numberTs = 11;
let numberSt = numberTs % 2;
if (numberSt > 0) {
  console.log("2.", "Sondgoi");
} else if (numbeSt < 0) {
  console.log("1.", "Tegsh");
}

let a = 300;
let b = 40;
let c = 10;

if (a > b) {
  if (a > c) {
    console.log("3. Ikh", a);
  } else {
    console.log("3. Ikh", c);
  }
} else {
  if (b < c) {
    console.log("3. Ikh", c);
  } else {
    console.log("3. Ikh", b);
  }
}

if (a < b) {
  if (a < c) {
    console.log("3. Baga", a);
  } else {
    console.log("3. Baga", c);
  }
} else {
  if (b > c) {
    console.log("3. Baga", c);
  } else {
    console.log("3. Baga", b);
  }
}

let string = "string";
let urt = string.length;
console.log("4.", urt);

let word = "jiijiji";
let tomWord = word.toUpperCase();
console.log("5.", tomWord);

const too = 15;
const gurawt = too % 3;
const tawt = too % 5;
if (gurawt === 0 && tawt === 0) {
  console.log("6. FizzBuzz");
} else if (gurawt === 0) {
  console.log("6. Fizz");
} else if (tawt === 0) {
  console.log("6. Buzz");
}

const a1 = "Hello";
const b1 = "World";
const ab = a1 + b1;
console.log("7.", ab);

const x = 7;
const y = 9;
const xy = (x + y) / 2;
console.log("8.", xy);

const w = 0;
if (w === 0) {
  console.log("9. Number is Zero", w);
} else if (w < 0) {
  console.log("9. Surug", w);
} else if (w > 0) {
  console.log("9. eyreg)", w);
}

const q = 10;
if (q === 10) {
  console.log("10. Number is Ten", q);
} else if (q > 10) {
  console.log("10. Number is Above Ten", q);
} else if (q < 10) {
  console.log("10. Number is Bellow Ten", q);
}

const number1 = 11
const number2 = 13
if (number1 === number2) {
    console.log("11. Numbers are equal.")
} else {
    console.log("11. Numbers are not equal")
}

const number3 = 50
const number4 = number