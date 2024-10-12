function math() {
  let num1 = Number(prompt(" 1 - amalni kiriting"));
  let num2 = Number(prompt(" 2 - amalni kiriting"));
  let amal = prompt(" Amalni kiriting (+,-,/,*)");
  let natija;

  if (amal === "+") {
    natija = num1 + num2;
  } else if (amal === "-") {
    natija = num1 - num2;
  } else if (amal === "*") {
    natija = num1 * num2;
  } else if (amal === "/") {
    natija = num1 / num2;
  } else {
    alert("qayta urinib koring");
  }
   
  console.log(natija);

  let qaytaSorov = confirm(`Natija ${natija} . yana amal bajarasizmi ?`);
  if(qaytaSorov){
    math()
  }else{
    alert("Hayr");
  }
}
math();
