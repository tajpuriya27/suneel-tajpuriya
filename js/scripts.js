// alert("Hello TEJ!");

/* Logic for Samosa calucations */
let incSamosa = document.getElementById("incSamosa");
let decSamosa = document.getElementById("decSamosa");

let samosaCount = 0;

incSamosa.addEventListener("click", function () {
  samosaCount++;
  document.getElementById("numSamosa").innerHTML = samosaCount;
  price();
});

decSamosa.addEventListener("click", function () {
  if (samosaCount > 0) {
    samosaCount--;
    document.getElementById("numSamosa").innerHTML = samosaCount;
  }
});

/* Logic for tea calucations */
let incTea = document.getElementById("incTea");
let decTea = document.getElementById("decTea");

let teaCount = 0;

incTea.addEventListener("click", function () {
  teaCount++;
  document.getElementById("numTea").innerHTML = teaCount;
  price();
});

decTea.addEventListener("click", function () {
  if (teaCount > 0) {
    teaCount--;
    document.getElementById("numTea").innerHTML = teaCount;
  }
});

let totalPrice, vatAmt, tipAmt;

function price() {
  let samosaPrice = document.getElementById("samosaPrice").value;
  let samosaTotal =samosaCount * samosaPrice;
  document.getElementById("samosaTotal").innerHTML = samosaTotal;

  let teaPrice = document.getElementById("teaPrice").value;
  let teaTotal = teaCount * teaPrice;
  document.getElementById("teaTotal").innerHTML = teaTotal;

  totalPrice = samosaTotal + teaTotal;
  document.getElementById("totalPrice").innerHTML = totalPrice; 

  vatAmt = .13 * totalPrice;
  document.getElementById("vatAmt").innerHTML = vatAmt;

  tipAmt = .10 * totalPrice;
  document.getElementById("tipAmt").innerHTML = tipAmt;

  
}

function calculate(){
    let grandTotal = totalPrice + vatAmt + tipAmt;
    document.getElementById("grandTotal").innerHTML = grandTotal;
}