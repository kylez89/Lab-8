//This is Lab 7 - using a for loop
//Lab 8 added

var total =0;
var groceryList = [
  {name: "New York Strip",
    price: 23.00},
  {name: "Chicken",
    price: 15.50},
  {name: "Brown Rice",
    price: 6.00},
  {name: "Raspberries",
    price: 5.00},
  {name: "Peppers",
    price: 3.50},
  {name: "Salsa",
    price: 4.00}
];function addName() {
 
}
for (var i=0; i<groceryList.length;i++){
     
  total+=groceryList[i].price;
 
        console.log(groceryList[i].name + " $" + groceryList[i].price.toFixed(2));  
  var printedList = document.createElement('div');
 
  printedList.innerHTML = groceryList[i].name + " $" + groceryList[i].price.toFixed(2);   document.body.appendChild(printedList);}groceryList.totalAmount = function(){   var total = 0;
     for (var i = 0; i < groceryList.length; i++) {
        total = total + groceryList[i].price;
     }
  return total.toFixed(2);
};var printedTotal = document.createElement('div');printedTotal.innerHTML = "Total $ " +groceryList.totalAmount();document.body.appendChild(printedTotal);
console.log("Total: $"+total);






























	]