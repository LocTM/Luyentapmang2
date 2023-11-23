// BT1
// let a = [
//     [1, 2,  1,  24],
//     [8, 11, 9,  4],
//     [7, 0,  7,  27],
//     [7, 4,  28, 14],
//     [3, 10, 26,  7]
// ];
//
// for (let i = 0; i < a.length ; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//         console.log(a[i][j]);
//     }
// }

//BT2
// let a =  [ 'c', 's', 'c', '2', '6', '1' ]
// a.reverse();
// console.log(a);

//BT3
// let charArray = ['a', '1', 'b', '3', 'c', '5', 'd', '7'];
// let count = 0;
// for (let i = 0; i < charArray.length; i++) {
//     // Kiểm tra nếu là ký tự số
//     if (!isNaN(parseInt(charArray[i]))) {
//         count++;
//     }
// }
//
// console.log('Số ký tự số trong mảng là: ' + count);

// BT4
// let inputString = "Toi di hoc";
// let words = inputString.split(' ');
// let wordCount = words.length;
// console.log('Số từ trong chuỗi là: ' + wordCount);

// BT5
// let string1 = prompt("Nhập vào chuỗi thứ nhất:");
// let string2 = prompt("Nhập vào chuỗi thứ hai:");
// if (string1 === string2) {
//     console.log("Hai chuỗi giống nhau.");
// } else {
//     console.log("Hai chuỗi không giống nhau.");
// }

// BT6
let charArray = prompt("Nhập vào một mảng ký tự:").split('');
for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === '-') {
        charArray[i] = '_';
    }
}
console.log(charArray.join(''));