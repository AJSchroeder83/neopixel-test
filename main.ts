let Index = 0
let Index2 = 0
let Farbliste = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green)
]
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
let Part1 = strip.range(0, 4)
let Part2 = strip.range(4, 4)
strip.showRainbow(1, 360)
strip.show()
basic.pause(1000)
basic.forever(function () {
    for (let Index2 = 0; Index2 <= 5; Index2++) {
        Part2.showColor(Farbliste[Index2])
        basic.pause(500)
        Part2.setBrightness(0)
        basic.pause(500)
        Part2.setBrightness(150)
        basic.pause(200)
    }
    if (Index2 == 5) {
        Index2 = 0
    }
})
basic.forever(function () {
    let Index3 = 0
    for (let Index = 0; Index <= 255; Index++) {
        Part1.showColor(neopixel.colors(NeoPixelColors.Purple))
        Part1.setBrightness(Index)
    }
    if (Index == 255) {
        for (let Index3 = 0; Index3 <= 255; Index3++) {
            Part1.setBrightness(255 - Index3)
        }
    } else if (Index3 == 255) {
        Index = 0
    }
    basic.pause(randint(100, 500))
})
