const menubutton =  document.getElementById("menubutton")
const menu= document.getElementById("menu")


menubutton.addEventListener('click' , () => {
    menu.classList.add("show")
    menubutton.classList.add("trs")
})




const closebutton = document.getElementById("closebutton")

closebutton.addEventListener('click' , () => {
    menu.classList.remove("show")
    menubutton.classList.remove("trs")
})


const settbutton= document.getElementById("settbutton")

settbutton.addEventListener("click" , function() {
    window.location.href="settings.html"

}

)




const firstimg= document.getElementById("firstone")
const playn=document.getElementById("h1playnow")

const lastimg= document.getElementById("animationbord2")
const blackimg= document.getElementById("animationbord1")
const raja3= document.getElementById("setout")
const body=document.body
const removing= document.getElementById("removeve")
function aftertime(){
    firstimg.style.opacity=0
    playn.classList.toggle("anim2")
}

function afterit(){
    lastimg.style.opacity=0
    blackimg.style.opacity=0
    body.classList.add("after")
    playn.classList.toggle("anim22")
}


function removelab(){
    playn.classList.toggle("anim3")
}
function displayunac(){
    removing.classList.toggle("on")
}



setTimeout(aftertime,3000)
setTimeout(afterit,8000)
setTimeout(removelab,11000)
setTimeout(displayunac,13000)