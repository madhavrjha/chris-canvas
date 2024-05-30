const canvas = document.querySelector('canvas')

canvas.width = innerWidth
canvas.height = innerHeight

const c = canvas.getContext('2d')

function Circle(x, y, dx, dy, r) {
	this.x = x
	this.y = y
	this.dx = dx
	this.dy = dy
	this.r = r

	this.draw = function () {
		c.beginPath()
		c.arc(this.x, this.y, this.r, 0, Math.PI * 2)
		c.strokeStyle = 'black'
		c.stroke()
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
	}
}

let circleArray = []

for (let i = 1; i <= 1000; i++) {
	let r = 5 + Math.floor(Math.random() * 20)
	let x = r + Math.floor(Math.random() * (innerWidth - r * 2))
	let y = r + Math.floor(Math.random() * (innerHeight - r * 2))
	let dx = (Math.random() - 0.5) * Math.floor(Math.random() * 10)
	let dy = (Math.random() - 0.5) * Math.floor(Math.random() * 10)
	circleArray.push(new Circle(x, y, dx, dy, r))
}

function animate() {
	requestAnimationFrame(animate)

	c.clearRect(0, 0, innerWidth, innerHeight)

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].draw()
		circleArray[i].update()
	}
}

animate()
