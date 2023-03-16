const p = document.createElement('p')

p.innerText = 'Hello World'

p.style.color = 'red'

const increaseFontSizeButton = document.createElement('button')
const decreaseFontSizeButton = document.createElement('button')
const resetFontSizeButton = document.createElement('button')
const doubleFontSizeButton = document.createElement('button')

increaseFontSizeButton.innerText = 'Font increase'
decreaseFontSizeButton.innerText = 'Font decrease'
resetFontSizeButton.innerText = 'Font reset'
doubleFontSizeButton.innerText = 'Font double'

document.body.appendChild(increaseFontSizeButton)
document.body.appendChild(decreaseFontSizeButton)
document.body.appendChild(resetFontSizeButton)
document.body.appendChild(doubleFontSizeButton)

document.body.appendChild(p)

let fontsize = 1

increaseFontSizeButton.addEventListener('click', () => {
  fontsize += 1
  p.style.fontSize = fontsize + 'em'
})

decreaseFontSizeButton.addEventListener('click', () => {
  fontsize -= 1
  p.style.fontSize = fontsize + 'em'
})

resetFontSizeButton.addEventListener('click', () => {
  fontsize = 1
  p.style.fontSize = fontsize + 'em'
})

doubleFontSizeButton.addEventListener('click', () => {
  fontsize *= 2
  p.style.fontSize = fontsize + 'em'
})
