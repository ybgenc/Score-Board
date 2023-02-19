
let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let homeScoreCounter = 0
let guestScoreCounter = 0

function plus1(){
    homeScoreCounter += 1
    document.getElementById("homeScore").innerText = homeScoreCounter

}

function plus2(){
    homeScoreCounter += 2
    document.getElementById("homeScore").innerText = homeScoreCounter
}

function plus3(){
    homeScoreCounter += 3
    document.getElementById("homeScore").innerText = homeScoreCounter

}

function plusG1(){
    guestScoreCounter += 1
    document.getElementById("guestScore").innerText =  guestScoreCounter
}

function plusG2(){
    guestScoreCounter += 2
    document.getElementById("guestScore").innerText =  guestScoreCounter
}

function plusG3(){
    guestScoreCounter += 3
    document.getElementById("guestScore").innerText =  guestScoreCounter
}