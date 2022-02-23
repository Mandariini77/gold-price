
var goldApiObject;

var myHeaders = new Headers(); //GOLDAPI.IO
myHeaders.append("x-access-token", "goldapi-4fu2rlj18kzx1vbeh-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
  .then(response => response.json())
  //.then(result => console.log(result))        //original code
  //.catch(error => console.log('error', error));  //original code
  .then(result => {
   goldApiObject = result;
   var goldPriceFromApi = goldApiObject.price;
   output.innerHTML = goldPriceFromApi;
   var goldPriceText = `Gold price per troy ounce (31.1035 g) today is ${goldPriceFromApi} USD (United States Dollars $)`
   introStatement.innerHTML = goldPriceText;
  })


function showGrams() {
  var amount = document.getElementById("userinput").value;
  var pricePerGramInUSD = 1900 / 31.1035;
  var priceTotalInUsd = amount * pricePerGramInUSD;
  document.getElementById("gramsPar").innerHTML = "You have " + amount + " grams of gold" + "<br>"
    + "worth " + "<br>" + priceTotalInUsd + " USD";

}


function showAmount() {
  var amount2 = document.getElementById("userinput2").value;
  document.getElementById("priceOfBlock").innerHTML = "The price for the amount quoted is " + amount2;
}



