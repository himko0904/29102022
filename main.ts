radio.onReceivedNumber(function (receivedNumber) {
    y = receivedNumber
    y = y / 12
    basic.showNumber(y)
})
input.onButtonPressed(Button.A, function () {
    x = x + 1
    basic.showNumber(x)
})
input.onButtonPressed(Button.AB, function () {
    x = x * 12
    radio.sendNumber(x)
})
input.onButtonPressed(Button.B, function () {
    x = 0
    basic.showNumber(x)
})
let y = 0
let x = 0
radio.setGroup(225)
x = 0
