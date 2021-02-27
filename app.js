let playArea = {}
playArea.inPlay = false
const message = document.querySelector('.message')
const button = document.querySelector('button')
const gameArea = document.querySelector('.gameArea')

messager('Click start to Play')

button.addEventListener('click', function () {
  if (!playArea.inPlay) {
    playArea.inPlay = true
    button.style.display = 'none'
    messager('Click the Enemy as quickly as you see them')
    playArea.timer = setTimeout(myBox, rand(3000))
  }
})

function myBox() {
  let el = document.createElement('div')
  el.style.backgroundImage = 'url(images/11.png)'
  el.style.backgroundRepeat = 'no-repeat'
  el.style.backgroundPosition = 'center'
  el.style.backgroundSize = 'cover'
  el.style.width = 100 + 'px'
  el.style.height = 100 + 'px'
  el.style.position = 'relative'
  el.style.top = rand(500) + 'px'
  el.style.left = rand(80) + 'vw'
  el.addEventListener('click', hit)
  el.start = new Date().getTime()
  gameArea.appendChild(el)
}

function hit(e) {
  let end = new Date().getTime()
  let start = e.target.start
  let duration = (end - start) / 1000
  messager('It took ' + duration + ' seconds to HeadShot!')
  clearTimeout(playArea.timer)
  gameArea.children[0].remove()
  playArea.timer = setTimeout(myBox, rand(3000))
}

/* function getColor() {
    function col() {
        let hex = rand(255).toString(16);
        return ("0" + String(hex)).substr(-2);
    }
    return "#FF0000";
} */

function rand(num) {
  let tempVal = Math.floor(Math.random() * num)
  return tempVal
}

function messager(mes) {
  message.innerHTML = mes
}
