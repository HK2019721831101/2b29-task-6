let c = 0
let f = 0
input.onButtonPressed(Button.A, function () {
    c = 0
    basic.showNumber(c)
})
input.onButtonPressed(Button.B, function () {
    f = input.temperature() * 1.8 + 32
    basic.showNumber(f)
})
