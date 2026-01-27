const price = 4500;

if (price >= 6000) {
  const discount = (price / 100) * 15;
  const pay = price - discount;
  console.log("After 15% discount you have to pay ", pay);
} else if (price >= 3000) {
  const discount = (price / 100) * 5;
  const pay = price - discount;
  console.log("After 5% discount you have to pay ", pay);
} else {
  console.log(price);
}
