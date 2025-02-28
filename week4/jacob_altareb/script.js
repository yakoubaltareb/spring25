function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText)+1
}
function makeSounds(){
    new Audio('crunchy-bites-88726.mp3').play()           
}

window.onload = function() {
    move()
  }
  
function move() {
    let img = document.getElementById('img')
    img.style.left = Math.floor(Math.random() * window.innerWidth) + "px"
    img.style.top = Math.floor(Math.random() * window.innerHeight) + "px"
  }