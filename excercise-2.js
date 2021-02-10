/*
2. Buat sebuah program untuk memvalidasi format nomor handphone
Nomor handphone minimum 10 digit dan maksimum 12 digit
Hanya menerima digit karakter

*/

const handleDigitInput = () => {
  const inputDigitCheck = document.getElementById('inputDigitCheck').value;
  console.log(inputDigitCheck)
  const myRegex = /^[0-9]{10,12}$/g;

  if(myRegex.test(inputDigitCheck) == true) {
    console.log('Password correct')
  } else {
    console.log('Password between 10-12 characters');
  }
}