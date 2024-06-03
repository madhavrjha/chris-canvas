const canvas = document.querySelector('canvas')

canvas.height = innerHeight
canvas.width = innerWidth

const centerX = innerWidth / 2
const centerY = innerHeight / 2
const radiusMax = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2))
const radiusMin = 10
const maxCircle = 100
const radiusDiff = (radiusMax - radiusMin) / maxCircle

const c = canvas.getContext('2d')

function Circle(r, color) {
	this.r = r
	this.draw = function () {
		c.beginPath()
		c.arc(centerX, centerY, this.r, 0, 2 * Math.PI)
		c.fillStyle = color
		c.fill()
	}

	this.update = function () {
		// this.r += 1
	}
}

const circleArray = []

for (let i = 1, r = radiusMax; i <= maxCircle; i++, r -= radiusDiff) {
	let color = i % 2 ? 'white' : 'black'
	circleArray.push(new Circle(r, color))
}

for (let i = 0; i < circleArray.length; i++) {
	circleArray[i].draw()
	circleArray[i].update()
}

// function animate() {
// 	requestAnimationFrame(animate)

// 	c.clearRect(0, 0, innerWidth, innerHeight)
// }

// animate()
