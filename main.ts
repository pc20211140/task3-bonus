let count = 0
input.onButtonPressed(Button.A, function () {
    count = 0
    while (true) {
        basic.showNumber(count)
        count += 1
    }
})
basic.forever(function () {
	
})
