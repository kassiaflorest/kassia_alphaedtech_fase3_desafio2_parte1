let meus_palitos = 0
let palitos_oponente = 0
let aposta = 0
input.onButtonPressed(Button.A, function () {
    meus_palitos = randint(1, 3)
    if (meus_palitos == 1) {
        basic.showNumber(1)
    } else if (meus_palitos == 2) {
        basic.showNumber(2)
    } else if (meus_palitos == 3) {
        basic.showNumber(3)
    }
})
input.onButtonPressed(Button.AB, function () {
    palitos_oponente = randint(1, 3)
    basic.showNumber(palitos_oponente)
    basic.pause(5000)
    if (aposta == meus_palitos + palitos_oponente) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    aposta += meus_palitos + randint(1, 3)
    basic.showNumber(aposta)
})
