let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

for (let y = 100; y <= 800; y += 100) {
	for (let x = 100; x <= 800; x += 100) {
		c.fillRect(x, y, 50, 50)
	}
}
