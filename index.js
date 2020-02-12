function numToWords(num) {  

const units = ['zero','one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen'];
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy', 'eighty','ninety'];

let result = ' ';

if (num < 0 || num > 999999999) {
  return result = 'Out of range'
};

if (!num) {
  alert('Enter a valid number');
  return result;
}

if (num < 20) {
  return result = units[num];
};

if (num < 100) {
  return result = tens[Math.floor(num / 10) - 2] + (num % 10 != 0 ? '-' + units[num % 10] : '');
};

if (num < 1000) {
  return result = units[Math.floor(num / 100)] + ' hundred' + (num % 100 == 0 ? '' : ' and ' + numToWords(num % 100));
};

if (num < 1000000){
  return result = numToWords(Math.floor(num / 1000)) + ' thousand' + (num % 1000 == 0 ? '' : ', ' + numToWords(num % 1000));
};

if (num < 1000000000){
  return result = numToWords(Math.floor(num / 1000000)) + ' million' + (num % 1000000 == 0 ? '' : ', ' + numToWords(num % 1000000));
};

return result;
}

document.querySelector('#btn').onclick = function collector() {
  let input = document.getElementById('number').value;
  
  let result = numToWords(input)
  document.getElementById('result').innerText = result;
}
