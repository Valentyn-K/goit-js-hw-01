let total = 100;
let ordered = Number(prompt("Сколько товаров Вы хотите приобрести?"));
if (total >= ordered) {
    alert("Заказ оформлен, с вами свяжется менеджер");
} else if (total < ordered) {
    alert("На складе недостаточно твоаров!")
} else {
    alert("Посмотрите другие товары")
}
console.log(ordered);

// let total = 100;
// let ordered = Number(prompt("Сколько товаров Вы хотите приобрести?"));
// if (total >= ordered) {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//     console.log("На складе недостаточно твоаров!")
// }
// console.log(ordered);