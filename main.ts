let number = 0
input.onGesture(Gesture.Shake, function () {
    number = randint(80, 100)
    basic.showNumber(number)
    if (number >= 80 && number <= 84) {
        basic.showString("A-")
    } else if (number >= 85 && number <= 90) {
        basic.showString("A")
    } else if (number >= 90 && number <= 100) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
