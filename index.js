let intialPrice = document.querySelector("#intial-price")
let stocks = document.querySelector("#stocks")
let currentPrice = document.querySelector("#current-price")
let tellMeBtn = document.querySelector("#tell-me")
let outputMsg = document.querySelector("#output-msg")
let bodyEffect = document.querySelector("body")
function checkFiled(){
    if (((intialPrice.value) == "" ) || ((stocks.value) == "" ) || ((currentPrice.value) == "" )) {
        alert('Please fill out all Fields')
    }else{
        calculateProfitAndLoss(Number(intialPrice.value), Number(currentPrice.value), Number(stocks.value))
    }
}

function  calculateProfitAndLoss(costPrice ,sellingPrice, stock){
   if(sellingPrice > costPrice){
      let  profit = sellingPrice - costPrice
      let profitPercentage =  (profit/costPrice)*100
      bodyEffect.classList.remove("loss-style")
      bodyEffect.classList.add("profit-style")
      outputMsg.style.display = "block"
       outputMsg.innerText = ` Hey, the profit is ₹${(profit*stock).toFixed(2)} and the profit percent is ${(profitPercentage*stock).toFixed(2)}%`   
       outputMsg.style.color = "green"

   } else if (sellingPrice < costPrice){
       let loss = costPrice - sellingPrice
       let lossPercentage = (loss/costPrice)*100
      bodyEffect.classList.remove("profit-style")
      bodyEffect.classList.add("loss-style")
      outputMsg.style.display = "block"
       outputMsg.innerText = ` Hey, the loss is ₹${(loss*stock).toFixed(2)} and the loss percent is ${(lossPercentage*stock).toFixed(2)}%`
       outputMsg.style.color = "red"
   }else{
      outputMsg.style.display = "block"
    outputMsg.innerText = `No pain no gain and no gain no pain` 
    outputMsg.style.color = "rgb(61, 61, 61)"

   }
}


tellMeBtn.addEventListener("click", function(e){
    e.preventDefault()
    if((intialPrice.value >= 0 ) && ((stocks.value) >=0 ) && ((currentPrice.value) >=0 )){
    checkFiled()
    }else{
      outputMsg.style.display = "none"
      bodyEffect.classList.remove("loss-style")
      bodyEffect.classList.remove("profit-style")
      bodyEffect.classList.add("body") 
      alert("Value should not be below zero") 
    }
})















