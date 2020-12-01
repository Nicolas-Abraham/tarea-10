input.onButtonPressed(Button.B, function () {
    if (input.compassHeading() > 23) {
        music.playTone(392, music.beat(BeatFraction.Double))
    } else {
        music.playMelody("G D B C5 A C5 E G ", 120)
    }
})
