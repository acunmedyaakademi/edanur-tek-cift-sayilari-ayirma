//Girilen 10 sayıyı bir diziye ekleyin. Sayıları kontrol ederek tek ve çift sayıları ayrı ayrı dizilere ayırıp konsola yazdırın.

const numbers = [];
alert("Give me ten numbers.");
for (let i = 0; i < 10; i++) {
  const number = Number(prompt(`Number ${i + 1}:`));
  numbers.push(number);
}
const odd = [];
const even = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  } else {
    odd.push(numbers[i]);
  }
}
console.log(`All the numbers : ${numbers}`);
console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}`);
