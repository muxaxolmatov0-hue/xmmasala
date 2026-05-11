//===============================================================================================================================================

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let count = 0;
// nums.forEach((item) => {
//   count += item;
// });

// console.log(count);

//=================================================================================================================================================

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let yigindi = products.reduce((acc, cur) => {
//   return acc + cur.price;
// }, 0);

// console.log("Umumiy narx:", yigindi);

//===================================================================================================================================

// // 2-masala.

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const animalCount = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// console.log("Hayvonlar soni:", animalCount);

//=================================================================================================================================

// 3-masala

// const nums = [1, 2, 3, 4, 5];
// console.log(
//   "3-masala:",
//   nums.map((n) => n * n),
// );

//==================================================================================================================================

// 4-masala

// const numbers = [1, -4, 12, 0, -3, 29, -150];
// const sum = numbers.filter((n) => n > 0).reduce((a, b) => a + b, 0);
// console.log("4-masala:", sum); // 42

//==================================================================================================================================

// 8-masala

// const dups = [1, 2, 2, 3, 4, 4, 5];
// const unique = dups.reduce((acc, curr) => {
//   if (!acc.includes(curr)) acc.push(curr);
//   return acc;
// }, []);
// console.log("8-masala:", unique); // [1, 2, 3, 4, 5]

//===================================================================================================================================

// 11-masala

// const cheapest = products.sort((a, b) => a.price - b.price)[0];
// console.log("11-masala:", cheapest.name);

//=================================================================================================

// 12-masala

// const total = products.reduce((acc, p) => acc + p.price, 0);
// console.log("12-masala:", total);

//====================================================================================================

// 15-masala

// const deleted = products.filter((p) => p.id !== 4);
// console.log("15-masala (ID 4 o'chdi):", deleted);

//===================================================================================================

// 16-masala

// const isLetters = "Abdulaziz"
//   .split("")
//   .every((c) => c.toLowerCase() !== c.toUpperCase());
// console.log("16-masala:", isLetters);

//==================================================================================================
