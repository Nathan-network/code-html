const btn = document.querySelector("button")

btn.addEventListener("click",()=>{
document.querySelector('h2').style.color = "orange"
document.querySelector('h1').innerHTML = "h2"
document.querySelector('h2').innerText = "bouton clicker"
})

console.log(btn)

