let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

c.fillStyle = 'orange'
c.fillRect(100, 100, 300, 300)

c.beginPath()
c.moveTo(500, 700)
c.lineTo(100, 300)
c.lineTo(500, 800)
c.strokeStyle = 'red'
c.stroke()

c.beginPath()
c.arc(350, 350, 50, 0, 2 * Math.PI, false)
c.strokeStyle = 'red'
c.fillStyle = 'blue'
c.fill()
c.stroke()
