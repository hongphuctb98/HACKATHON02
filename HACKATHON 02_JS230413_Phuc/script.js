"use strict";

//Bài1
// let arr = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
// //c1
// console.log(Math.max(...arr));
// //c2
// console.log(arr.reduce((a, b) => (a > b ? a : b)));
// //c3
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) max = arr[i];
// }
// console.log(max);

//Bài 2

// let str = " this is A tEst ";
// let arr = str.split(" ");
// let result = "";
// arr.forEach((item) => {
//   result += item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() + " ";
// });
// console.log(result);

//Bài 3
// function validateDay(month, year) {
//   let flag = true;
//   if (month < 1 || month > 12) {
//     flag = false;
//   }
//   if (year < 1) {
//     flag = false;
//   }

//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       console.log("Tháng này có 31 ngày");
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       console.log("Tháng này có 30 ngày");
//       break;
//     case 2:
//       if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         console.log("Tháng này có 29 ngày");
//       } else {
//         console.log("Tháng này có 28 ngày");
//       }
//       break;
//   }

//   return flag;
// }

// let month = +prompt("nhập tháng");
// let year = +prompt("nhập năm");
// if (!validateDay(month, year)) {
//   alert("nhập tháng không hợp lệ");
// }

//Bài 4

// let arr = [3, 25, 38, 49, 12];
// // use sort
// // console.log(arr.sort((a, b) => b - a));

// //not use sort
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);
