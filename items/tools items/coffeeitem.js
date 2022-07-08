let ATC=document.querySelector("button")
let quantity= document.querySelector("input")
let comp= document.querySelector("#comp")
let itemname=document.querySelector("#name")
ATC.addEventListener("click",()=>{
    comp.innerHTML=`Complete add to cart ${quantity.value} of ${itemname.textContent}`

})

let hov=document.querySelector("#info img");
                hov.addEventListener("mouseout",()=>{
                hov.src=("orginal.png")
                })
                hov.addEventListener("mouseover",()=>{
                    hov.src=("hover.png")
                    })