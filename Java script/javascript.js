// // 1.
// function numberSquare(n) {
//   return n ** 2;
// }
// const n = numberSquare(3);
// console.log("1.", n);

// // 2.
// function isEven(h) {
//   return h % 2;
// }
// const h = isEven(3);
// if (h <= 0) {
//   console.log("2. true");
// } else {
//   console.log("2. false");
// }

// // 3.
// function greet(name) {
//   return name;
// }
// const ner = greet("bata");
// console.log("3. Hello,", ner, "!");

// // 4.
// function niilberOloh(a, b) {
//   return a + b;
// }
// const result = niilberOloh(1, 3);
// console.log("4.", result);

// // 5.
// function maxOfTwo(a, b) {
//   if (a >= b) {
//     console.log("5.", a);
//   } else {
//     console.log("5.", b);
//   }
// }
// maxOfTwo(7, 6);

// // 6.
// function getLength(arr) {
//   return console.log("6.", arr.length);
// }
// getLength("cdffcfgcfcg");

// // 7.
// function toUpper(str) {
//     return console.log("7.", str.toUpperCase())
// }
// toUpper("hello")

// //8.
// function isPositive(too) {
//     if (too>0) {
//         console.log("8. true")
//     } else {
//         console.log("8. false")
//     }
// }
// isPositive(-4)

// // 9.
// function firstItem(arl) {
//     console.log("9.", arl.slice(0, 1))
// }
// firstItem("a")

//
//
//

// 1.
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// const numbers = [100, 20, 30];
// const total = sumArray(numbers);
// console.log(total);

//2.
// function reverseString(str) {
//   console.log(str.split("").reverse().join(""))
// }
// reverseString("bata")

//3.
// function maxInArray(arra) {
//   let max = 0;
//   for (let i = 0; i < arra.length; i++) {
//     const number = arra[i];
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// }
// const nums = [2, 3];
// const result = maxInArray(nums);
// console.log(result);

//4.
// function capitalize(ug) {
//   let word = "";
//   for (let i = 0; i < ug.length; i++) {
//     let char = ug[i];
//     if (i === 0) {
//       const firstLetter = char.toUpperCase();
//       word += firstLetter;
//     } else {
//       word += char;
//     }
//   }
//   return word;
// }
// const words = "hello";
// const result = capitalize(words);
// console.log(result);

//5.
// function factorial(n) {
//   let s = 1;
//   for (let i = n; i > 1; i--) {
//     s *= i;
//   }
//   return s;
// }
// const too = factorial(3);
// console.log(too);

//6.
// function isPalindrome(str) {
//   let num = str.length - 1;
//   if (str[0] === str[num]) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// const ugudul = "123451";
// const result = isPalindrome(ugudul);

//7.
// function last(arr) {
//   let lItem = arr.pop()
//   console.log(lItem)
// }
// const numbers = [100, 20, 30];
// const total = last(numbers);

//8.
// function countOccurrences(arr, item) {
//   let zero = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       zero++;
//     }
//   }
//   return zero;
// }
// const sa = countOccurrences([1,1, 1, 2, 3], 1);
// console.log(sa);

//9.
function shortestWord(str) {
  let uguulber = str.split(" ");
  let gg = uguulber.sort((a, b) => a.length - b.length);
  let gg1 = gg[0];
  return gg1;
}
const Uguulber = "Bataa neg udur untjee"; 
const result = shortestWord(Uguulber);
console.log(result);

//10.
