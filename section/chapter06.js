// 묵시적 형 변환
let num = 10;
let str = "20";
const eew = num + str; // 1020 (숫자를 문자열로 자동 변환)
console.log(eew);

// 명시적 형 변환
let str1 = "30";
let strToNum1 = Number(str1); // 30
console.log(str1 + strToNum1);

let str2 = "40개";
let strToNum2 = Number(str2); // NaN
console.log(str2 + strToNum2);

let strToNum3 = parseInt(str2); // 40
console.log(str2 + strToNum3);

let num4 = 20;
console.log(num4 + "입니다.");
 