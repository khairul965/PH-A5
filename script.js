//Heart icon feature

let heartCount = 0;
let heartDisplay =document.getElementById("hearts")
let hearticon =document.getElementsByClassName("heart");
for(let i=0;i<hearticon.length;i++){
    hearticon[i].addEventListener("click",function(){
        heartCount++;
        heartDisplay.innerText = heartCount;
    });
}

// Coins feature

let coins =100;
let availableCoins =document.getElementById("coinsNum");
let callButton =document.getElementsByClassName("call-btn");
for(let i=0;i<callButton.length;i++){
    callButton[i].addEventListener("click",function(){
        if(coins<20){
        alert("Not enough coins to make call")
        return;
    } 
    coins -=20;
    availableCoins.innerText=coins;

     
    alert("Calling" +".....")
    })

}
