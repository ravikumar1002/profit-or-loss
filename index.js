const intialPrice = document.querySelector("#intial-price")
const stocks = document.querySelector("#stocks")
const currentPrice = document.querySelector("#current-price")
const tellMeBtn = document.querySelector("#tell-me")
const outputMsg = document.querySelector("#output-msg")
const backgroundChange = document.querySelector(".stock-page")

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
      backgroundChange.classList.remove("loss-style")
      backgroundChange.classList.add("profit-style")
      outputMsg.style.display = "block"
       outputMsg.innerText = ` Hey, the profit is ₹${(profit*stock).toFixed(2)} and the profit percent is ${(profitPercentage*stock).toFixed(2)}%`   
       outputMsg.style.color = "green"

   } else if (sellingPrice < costPrice){
       let loss = costPrice - sellingPrice
       let lossPercentage = (loss/costPrice)*100
      backgroundChange.classList.remove("profit-style")
      backgroundChange.classList.add("loss-style")
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
      backgroundChange.classList.remove("loss-style")
      backgroundChange.classList.remove("profit-style")
      backgroundChange.classList.add("body") 
      alert("Value should not be below zero") 
    }
})















