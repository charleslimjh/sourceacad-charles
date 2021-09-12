// Trying to run consecutively() using accumulate
function ab(soundsList) {
    return accumulate((x, y) => consecutively(list(x, y)),
                      silence_sound(0),
                      soundsList);
                      
}

const a = sine_sound(440, 1);
const b = sine_sound(660, 1);
const c = sine_sound(880, 1);
play(ab(list(a,b,c)));
