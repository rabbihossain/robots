var pinio = new (require('pinio')).Pinio()
var Motor = require('./motor').Motor

pinio.on('ready', function(board) {
	var motors = [
		// Base Rotate
		new Motor({
			pot: 'A5',
			min: 360,
			max: 630,
			home: 500,
			pwmPin: 5,
			dirPin: 4
		}),
		// Base Tilt
		new Motor({
			pot: 'A1',
			min: 350,
			max: 600,
			home: 500,
			pwmPin: 6,
			dirPin: 7
		}),
		// Base Up/Down
		new Motor({
			pot: 'A2',
			min: 250,
			max: 690,
			home: 505,
			pwmPin: 9,
			dirPin: 8
		}),
		// Claw Up/Down
		new Motor({
			pot: 'A3',
			min: 450,
			max: 675,
			home: 545,
			pwmPin: 10,
			dirPin: 12
		}),
		// Claw Open/Close
		new Motor({
			pot: 'A4',
			min: 162,
			max: 450,
			home: 350,
			pwmPin: 11,
			dirPin: 13
		})
	]
})
