const canvas = document.querySelector('canvas')

canvas.height = innerHeight
canvas.width = innerWidth

const centerX = innerWidth / 2
const centerY = innerHeight / 2
const radiusMax = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2))
const radiusMin = 0
const maxCircle = 120
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
		this.r += 0.5
	}
}

const circleArray = []
let isBlack = true

for (let i = 1, r = radiusMax; i <= maxCircle; i++, r -= radiusDiff) {
	circleArray.push(new Circle(r, isBlack ? 'black' : 'white'))
	isBlack = !isBlack
}

function animate() {
	requestAnimationFrame(animate)
	c.clearRect(0, 0, innerWidth, innerHeight)

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].draw()
		circleArray[i].update()

		if (circleArray[i].r > radiusMax + radiusDiff) {
			// remove the first and largest circle
			circleArray.shift()
			i--

			// add the smallest cirle and
			const smallestCircleRadius = circleArray[circleArray.length - 1].r - radiusDiff
			const smallestCircle = new Circle(smallestCircleRadius, isBlack ? 'black' : 'white')
			circleArray.push(smallestCircle)
			smallestCircle.draw()
			isBlack = !isBlack
		}
	}
}

animate()
