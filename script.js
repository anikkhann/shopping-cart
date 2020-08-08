//remove item
const firstItem = document.getElementById("firstRemoveItem");
firstItem.addEventListener("click", function(){
   document.getElementById("firstCardItem").style.display = "none";
})
const secondItem = document.getElementById("secondRemoveItem");
secondItem.addEventListener("click", function(){
   document.getElementById("secondCardItem").style.display = "none";
})

//add first items number
const addFirstItem = document.getElementById("addFirstItem");
addFirstItem.addEventListener("click", function(){
   addItemNumber("firstItemNumber", "firstItemPrice", 1219);
})

//add second items number
const addSecondItem = document.getElementById("addSecondItem");
addSecondItem.addEventListener("click", function(){
   addItemNumber("secondItemNumber", "secondItemPrice", 59);
})
//minus first item number
const minusFirstItem = document.getElementById("minusFirstItem");
minusFirstItem.addEventListener("click", function(){
   minusItemNumber("firstItemNumber", "firstItemPrice", 1219);
})

//minus second item number
const minusSecondItem = document.getElementById("minusSecondItem");
minusSecondItem.addEventListener("click", function(){
   minusItemNumber("secondItemNumber", "secondItemPrice", 59);
})

//checkout
const checkout = document.getElementById("checkout");
checkout.addEventListener("click", function(){
   alert("Are you sure want to \"Check Out\"");
})

//Function for add Item Number
function addItemNumber(itemNumberId, itemPriceId, price){
const itemValue = document.getElementById(itemNumberId).value;
const itemNumber = parseFloat(itemValue);
const itemText = document.getElementById(itemNumberId).value = itemNumber + 1;
const itemPrice = document.getElementById(itemPriceId).innerText;
const itemPriceNumber = parseFloat(itemPrice);
const itemUpdatePrice = document.getElementById(itemPriceId).innerText = itemPriceNumber + price;

const subTotal = document.getElementById("subTotal").innerText;
const subTotalNumber = parseFloat(subTotal);
const SubtotalUpdate = document.getElementById("subTotal").innerText = subTotalNumber + price;
const totalUpdate = document.getElementById("total").innerText = subTotalNumber + price;
const tax=totalUpdate*(5/100);
const updateTax=parseInt(tax);
document.getElementById("tax").innerText=updateTax;
}

//Function for minus Item Number
function minusItemNumber(itemNumberId, itemPriceId, price){
const itemValue = document.getElementById(itemNumberId).value;
const itemNumber = parseFloat(itemValue);
const itemText = document.getElementById(itemNumberId).value = itemNumber - 1;
const itemPrice = document.getElementById(itemPriceId).innerText;
const itemPriceNumber = parseFloat(itemPrice);
 const itemUpdatePrice = document.getElementById(itemPriceId).innerText = itemPriceNumber - price;
const subTotal = document.getElementById("subTotal").innerText;
const subTotalNumber = parseFloat(subTotal);
const SubtotalUpdate = document.getElementById("subTotal").innerText = subTotalNumber - price;
const totalUpdate = document.getElementById("total").innerText = subTotalNumber - price;
const tax=totalUpdate*(5/100);
const taxUpdate=parseInt(tax);
document.getElementById("tax").innerText=taxUpdate;
}