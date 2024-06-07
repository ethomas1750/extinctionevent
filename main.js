const strike = document.querySelectorAll(".ol")
for(let i = 0;i < strike.length; i ++){
    strike[i].addEventListener("click",()=>{
        strike[i].style.textDecoration = "line-through"
    })
}
const opaque = document.querySelectorAll(".ul")
for(let i = 0; i < opaque.length; i++){
    opaque[i].addEventListener("click",()=>{
        opaque[i].style.opacity = ".25"
    })    
}

const picture = document.querySelectorAll(".pic")

for(let i = 0; i < picture.length; i++){
    picture[i].addEventListener("click",()=>{
        picture[i].style.opacity = ".5"
    })    
}
document.querySelector("#destroy-all").addEventListener("click",()=>{
    for(let i = 0; i < strike.length; i++){
        strike[i].style.textDecoration = "line-through"
    }
    for(let i = 0;i < opaque.length;i++){
        opaque[i].style.opacity = ".25"
    }
    for(let i = 0;i < picture.length; i++){
        picture[i].style.opacity = ".5"
    }
})
