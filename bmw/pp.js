let showfirst = true

setInterval(()=> {
    const blue = document.getElementById("blue")
    const black = document.getElementById("black")


    if (showfirst === true) {
        blue.style.opacity = 1
        black.style.opacity = 0
    }
    else {
        blue.style.opacity = 0
        black.style.opacity = 1
    }


    showfirst = !showfirst
}, 2000)



window.addEventListener('scroll', () => {
    const target = document.querySelector('.scroll-div')
    const rect = target.getBoundingClientRect();

    if (rect.top < window.innerHeight + 400) {
        target.classList.add('visble')

    }
    else {
        target.classList.remove('visble')
    }
})




window.addEventListener('scroll', () => {
    const trgt = document.querySelector('.scroll-div2')
    const ret = trgt.getBoundingClientRect();


    if (ret.top < window.innerHeight + 800) {
        trgt.classList.add('visible')
    }
    else {
        trgt.classList.remove('visible')
    }
})




window.addEventListener('scroll', () => {
    const tgt = document.querySelector('.mini-car')
    const rct = tgt.getBoundingClientRect()

    if (rct.top < window.innerHeight - 200) {
        tgt.classList.add('repl')
    }
    else {
        tgt.classList.remove('repl')
    }
})






window.addEventListener('scroll', () => {
    const image = document.getElementById('tswirak')
    const scrollY = window.scrollY;
    const t3bir = document.getElementById('t3bir')
    const tgt = t3bir.getBoundingClientRect()
    let newidth = Math.max(2500, 100000 - scrollY * 22)
    let newtop = Math.max(4000, -10000 - scrollY * 250000)
    let newleft = Math.max(-450, -1000000 - scrollY * 202)

    image.style.width = newidth + 'px'
    image.style.top = newtop + 'px'
    image.style.left = newleft + 'px'


    if (tgt.top < window.innerHeight -400) {
        t3bir.style.opacity = 1
    }
    else {
        t3bir.style.opacity = 0
    }

})