let canvas = document.querySelector('canvas')

canvas.height = innerHeight
canvas.width = innerWidth

let c = canvas.getContext('2d')

let circles = []
const colors = ['vilot', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'silver']

for (let i = 1; i <= 100; i++) {
	circles.push({
		x: 100 + Math.floor(Math.random() * innerWidth - 100),
		y: 100 + Math.floor(Math.random() * innerHeight - 100),
		dx: 5 + Math.floor(Math.random() * 25),
		dy: 5 + Math.floor(Math.random() * 25),
		r: 20 + Math.floor(Math.random() * 50),
		strokeStyle: colors[Math.floor(Math.random() * colors.length)],
		fillStyle: colors[Math.floor(Math.random() * colors.length)],
	})
}

let x = Math.floor(Math.random() * innerWidth)
let y = Math.floor(Math.random() * innerHeight)
let dx = 20
let dy = 20
let r = 20 + Math.floor(Math.random() * 50)

function animate() {
	requestAnimationFrame(animate)
	console.log(1)
	c.clearRect(0, 0, innerWidth, innerHeight)

	for (let i = 0; i < circles.length; i++) {
		const { x, y, dx, dy, r, strokeStyle, fillStyle } = circles[i]

		c.beginPath()
		c.arc(x, y, r, 0, Math.PI * 2)
		c.strokeStyle = strokeStyle
		c.fillStyle = fillStyle
		c.stroke()
		c.fill()

		if (x + r >= innerWidth || x - r <= 0) {
			circles[i].dx = -dx
		}

		if (y + r >= innerHeight || y - r <= 0) {
			circles[i].dy = -dy
		}

		circles[i].x += circles[i].dx
		circles[i].y += circles[i].dy
	}

	// c.beginPath()
	// c.arc(x, y, r, 0, Math.PI * 2)
	// c.strokeStyle = 'blue'
	// c.fillStyle = 'orange'
	// c.stroke()
	// c.fill()

	// if (x + r >= innerWidth || x - r <= 0) {
	// 	dx = -dx
	// }

	// if (y + r >= innerHeight || y - r <= 0) {
	// 	dy = -dy
	// }

	// x += dx
	// y += dy
}

animate()
