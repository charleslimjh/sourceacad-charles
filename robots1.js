// Studio 10J
// Charles, Debbie, Han Wen, Sean, Shan, Ethan, Jia Cheng, Yuan Zheng

// Mission 1: Getting started
// Part 1: 
ev3_speak("Vimuth is the best");



//Part 2:
function move(len_in_cm) {
    const pos = 18.6;
    ev3_runToRelativePosition(ev3_motorB(), len_in_cm * pos, 150);
    ev3_runToRelativePosition(ev3_motorC(), len_in_cm * pos, 150);
    ev3_pause((len_in_cm * math_abs(pos) * 1000) / 150);
}

// TEST
// move(10);

// Part 3:

function aboutturn(deg) {
    const pos = 187;
    ev3_runToRelativePosition(ev3_motorB(), -pos * math_floor(deg / 90), 150);
    ev3_runToRelativePosition(ev3_motorC(), pos * math_floor(deg / 90), 150);
    ev3_pause(pos * math_floor(math_abs(deg) / 90) * 1000 / 150);
}

// TEST
// aboutturn(90);


//Part 4:

const actions = list(
                    move(10),
                    // anti-clockwise
                    ev3_pause(200),
                    aboutturn(90),
                    ev3_pause(200),
                    move(5),
                    // clockwise
                    ev3_pause(200),
                    aboutturn(-90),
                    ev3_pause(200),
                    move(15));

// TEST
// for_each(x=>x actions);

//Mission 2: thing

// Part 1:

function 
    ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) <= 10
        ? move(-30)
        :




//Mission 3: more things