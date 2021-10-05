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
    ev3_pause((math_abs(len_in_cm) * pos * 1000) / 150);
}

// TEST
move(10);

// Part 3:

function aboutturn(deg) {
    const pos = 187;
    ev3_runToRelativePosition(ev3_motorB(), -pos * math_floor(deg / 90), 150);
    ev3_runToRelativePosition(ev3_motorC(), pos * math_floor(deg / 90), 150);
    ev3_pause(pos * math_floor(math_abs(deg) / 90) * 1000 / 150);
}

// TEST
aboutturn(90);


//Part 4:

// COPY move() and aboutturn() functions here
function move(len_in_cm) {
    const pos = 18.6;
    ev3_runToRelativePosition(ev3_motorB(), len_in_cm * pos, 150);
    ev3_runToRelativePosition(ev3_motorC(), len_in_cm * pos, 150);
    ev3_pause((math_abs(len_in_cm) * pos * 1000) / 150);
}

function aboutturn(deg) {
    const pos = 187;
    ev3_runToRelativePosition(ev3_motorB(), -pos * math_floor(deg / 90), 150);
    ev3_runToRelativePosition(ev3_motorC(), pos * math_floor(deg / 90), 150);
    ev3_pause(pos * math_floor(math_abs(deg) / 90) * 1000 / 150);
}

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
for_each(x=>x, actions);

//Mission 2: thing

// Part 1:
function get_dist() {
    const is_true = true;
    if (is_true) {
        display(ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) / 10);
        ev3_pause(1000);
        get_dist();
    } else {
        return 1;
    }
}

// TEST
get_dist();

// Part 2:
function get_dist() {
    return display(ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) / 10);
}

function checker() {
    ev3_motorSetSpeed(ev3_motorB(), 150);
    ev3_motorSetSpeed(ev3_motorC(), 150);
    ev3_motorSetStopAction(ev3_motorB(), "brake");
    ev3_motorSetStopAction(ev3_motorC(), "brake");
    
    if (get_dist() <= 10) {
        ev3_motorStop(ev3_motorB());
        ev3_motorStop(ev3_motorC());
        ev3_pause(200);
        move(-30);
    } else {
        ev3_motorStart(ev3_motorB());
        ev3_motorStart(ev3_motorC());
        checker();
    }
}

// TEST
checker();

// Part 3: TBC

// function get_dist() {
//     return display(ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) / 10);
// }

// function dodge() {
//     ev3_motorSetSpeed(ev3_motorB(), 150);
//     ev3_motorSetSpeed(ev3_motorC(), 150);
//         ev3_motorStop(ev3_motorB());
//         ev3_motorStop(ev3_motorC());
//         ev3_pause(200);
//
//         if (get_dist() <= 15) {
//         let angle = 0;
//         if (math_floor(math_random * 2) === 0) {
//              angle = 90;
//         } else {
//              angle = -90;
//         }
//         
//         ev3_motorStart(ev3_motorB());
//         ev3_motorStart(ev3_motorC());
//         ev3_pause(5000);
//         aboutturn(-1 * angle);
//         dodge();
//     } else {
//         ev3_motorStart(ev3_motorB());
//         ev3_motorStart(ev3_motorC());
//         dodge();
//     }
// }

// function dodge() {
//     ev3_motorSetSpeed(ev3_motorB(), 150);
//     ev3_motorSetSpeed(ev3_motorC(), 150);
//     function after(direction) {
//         const angle = (d) => d ? 90 : -90;
//         if (get_dist() <= 15) {
//             ev3_motorStop(ev3_motorB());
//             ev3_motorStop(ev3_motorC());
//             ev3_pause(200);
//             aboutturn(angle(direction === "acw"));
//            
//         } else {
//             ev3_motorStart(ev3_motorB());
//             ev3_motorStart(ev3_motorC());
//             after(direction);
//         }
//     }
//    
//     if (get_dist() <= 15) {
//         ev3_motorStop(ev3_motorB());
//         ev3_motorStop(ev3_motorC());
//         ev3_pause(200);
//
//         let angle = 0;
//         if (math_floor(2 * math_random()) === 1) {
//             angle = 90;
//         } else {
//             angle = -90;
//         }
//
//         aboutturn(angle);
//         ev3_motorStart(ev3_motorB());
//         ev3_motorStart(ev3_motorC());
//         ev3_pause(6000);
//         aboutturn(-1 * angle);
//         dodge();
//     } else {
//         ev3_motorStart(ev3_motorB());
//         ev3_motorStart(ev3_motorC());
//         dodge();
//     }
// }

// dodge();

//Mission 3: more things