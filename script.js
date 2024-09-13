const btn = document.querySelector("button")

btn.addEventListener("click",(e)=>{
    console.log(e.target)
    e.target.innerText = "salut clique"
})

console.log(btn)

