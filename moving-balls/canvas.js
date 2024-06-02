const canvas = document.querySelector('canvas')

canvas.width = innerWidth
canvas.height = innerHeight

const c = canvas.getContext('2d')

const mouse = {
	x: undefined,
	y: undefined,
}

window.addEventListener('mousemove', function (e) {
	mouse.x = e.x
	mouse.y = e.y
})

const colors = [
	'#8ecae6',
	'#fb8500',
	'#ffb703',
	'#023047',
	'#d62828',
	'#ff006e',
	'#52796f',
	'#3a86ff',
	'#c0392b',
	'#3498db',
	'#9b59b6',
	'#34495e',
	'#16a085',
]

let circleArray = []

function Circle(x, y, dx, dy, r) {
	this.x = x
	this.y = y
	this.dx = dx
	this.dy = dy
	this.r = r
	this.minR = r
	this.color = colors[Math.floor(Math.random() * colors.length)]

	this.draw = function () {
		c.beginPath()
		c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
		c.strokeStyle = this.color
		c.stroke()
		c.fillStyle = this.color
		c.fill()
	}

	this.update = function () {
		if (this.x + this.r >= innerWidth || this.x - this.r <= 0) {
			this.dx = -this.dx
		}

		if (this.y + this.r >= innerHeight || this.y - this.r <= 0) {
			this.dy = -this.dy
		}

		this.x += this.dx
		this.y += this.dy

		// interactivity
		let distance = Math.sqrt(Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2))
		if (distance <= 120) {
			if (this.r < 30) {
				this.r += 1
			}
		} else {
			if (this.r > this.minR) {
				this.r -= 1
			}
		}
	}
}

function init() {
	circleArray = []

	for (let i = 1; i <= 900; i++) {
		let r = Math.floor(Math.random() * 5) + 5
		let x = r + Math.floor(Math.random() * (innerWidth - r * 2))
		let y = r + Math.floor(Math.random() * (innerHeight - r * 2))
		let dx = (Math.random() - 0.5) * Math.random() * 10
		let dy = (Math.random() - 0.5) * Math.random() * 10

		circleArray.push(new Circle(x, y, dx, dy, r))
	}
}

window.addEventListener('resize', function (e) {
	canvas.height = innerHeight
	canvas.width = innerWidth

	init()
})

function animate() {
	requestAnimationFrame(animate)

	c.clearRect(0, 0, innerWidth, innerHeight)

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].draw()
		circleArray[i].update()
	}
}

init()
animate()
