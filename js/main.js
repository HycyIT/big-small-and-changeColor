const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36

const bigest = () => {
    if(fontSize >= 66){
        return
    }
    fontSize+= 5
    p.style.fontSize = fontSize + 'px'
}

const smaller = () => {
    if(fontSize <= 11){
        return
    }
    fontSize -=5
    p.style.fontSize = fontSize + 'px'
}

const change = () => {

    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    p.style.color = `rgb(${r},${g},${b})`
}
sizeUp.addEventListener('click', bigest)
sizeDown.addEventListener('click', smaller)
colorBtn.addEventListener('click', change)
