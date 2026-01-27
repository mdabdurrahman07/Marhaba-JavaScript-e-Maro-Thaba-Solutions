const price = 100;
const age = 12;
if (age < 12) {
  console.log("You will get free food");
} else if (age >= 60) {
  const discount = (price / 100) * 50;
  const pay = price - discount;
  console.log("Congratulations you have got 50% discount now pay ", pay);
} else {
  console.log(price);
}
