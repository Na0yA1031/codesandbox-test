// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数は上書き可能";
// console.log(val1);

// //var変数は再宣言可能

// var val1 = "varの再宣言";
// console.log(val1);

// テンプレート文字列

// const name = "Bob";
// const age = "28";
// console.log(`私は${name}です年齢は${age}歳です`);

// 分割代入

// const myProfile = {
//   name: "bob",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile2 = ["Tim", 28, "獅子座"];
// const [name, age, seiza] = myProfile2;
// console.log(`私の名前は${name}です。年齢は${age}歳です。星座は${seiza}です`);

// const sayHello = (name = "Tom") => console.log(`こんにちは${name}さん！`);
// sayHello("Tim");

// スプレット構文...

// 配列の展開

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1, num2, arr3);

// 配列のコピーや結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

// const nameArr = ["田中", "山田", "じゃけぇ"];

// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1} ${nameArr[i]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArrs = [1, 2, 3, 4, 5];
// const numArrs2 = numArrs.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(numArrs2);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return name + "さん";
//   }
// });
// const newNameArr = nameArr.map((name) => {
//   return name === "じゃけぇ" ? name : name + "さん";
// });

// console.log(newNameArr);

// 三項演算子

// ある条件 ？ 条件がtruの時 : 条件がfalseの時;

// const num = 1300;
// // console.log(num.toLocaleString());
// console.log(typeof num);

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "数値がオーバーしています" : num1 + num2;
// };

// console.log(checkSum(50, 50));

// 論理演算子の本当の意味

// ||(パイプライン)は左側がfalseなら右側を返す

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

const num = 1;

// console.log(Boolean(num));
const fee = num || "金額未設定です";

console.log(fee);

const fee2 = num && "金額未設定です";
console.log(fee2);
