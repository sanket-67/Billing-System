let btn = document.getElementById("submit");
let itemList = document.getElementById("item-list");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    let item = document.getElementById("name").value;
    let qty = document.getElementById("qty").value;
    let rate = document.getElementById("rate").value;
    let amount = document.getElementById("amount").value;

    console.log(item, qty, rate, amount);

    let div = document.createElement("div");
    div.className = "item";

    let div1 = document.createElement("div");
    div1.className = "item-name";
    div1.innerText = item;

    let item1 = document.createElement("div");
    item1.className = "quantity";
    item1.innerText = qty;

    let qty1 = document.createElement("div");
    qty1.className = "rate";
    qty1.innerText =`${rate}.00` ;

    let amo1 = document.createElement("div");
    amo1.className = "total";




    amo1.innerText =`${amount}.00`;

    div.appendChild(div1);
    div.appendChild(item1);
    div.appendChild(qty1);
    div.appendChild(amo1);

    
    itemList.appendChild(div);
    let a = document.querySelectorAll(".total")
    let totalqty = document.querySelectorAll(".quantity")
    let totalrate = document.querySelectorAll(".rate")
    console.log(totalrate);
    console.log(totalqty);
    for (let i = 0; i < totalqty.length; i++) {
     let num1 = parseInt(totalqty[i].innerText)
     let num2 = parseInt(totalrate[i].innerText)
     let tp = num1 *num2
  a[i].innerText = tp.toFixed(2);
    
    }

   
console.log(a);
let sum =0 ;
for (let i = 0; i < a.length; i++) {
    sum =sum + parseFloat(a[i].innerText)  ;


   

}
console.log(sum);

let total1 = document.querySelector(".grand-total")
let total2 = document.querySelector(".subtotal")
total1.innerText = `Grand Total: Rs ${sum.toFixed(2)}`
total2.innerText = `Subtotal: Rs ${sum.toFixed(2)}`
});

let randomNumber = Math.random();
let no =  (parseInt(10*randomNumber));

let tableElement = document.querySelector('.table');
let date = document.querySelector('.datetime');
tableElement.innerText =  ` Table: Table ${no}`;

