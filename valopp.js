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


