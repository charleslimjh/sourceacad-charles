// Studio 10J
// Charles, Debbie, Han Wen, Sean, Shan, Ethan, Jia Cheng, Yuan Zheng

// Mission 1: Getting started
// Part 1: 
// ev3_speak("Vimuth is the best");



//Part 2:
function move(len_in_cm) {
    const pos = 18.6;
    ev3_runToRelativePosition(ev3_motorB(), len_in_cm * pos, 150);
    ev3_runToRelativePosition(ev3_motorC(), len_in_cm * pos, 150);
    ev3_pause((math_abs(len_in_cm) * pos * 1000) / 150);
}

// TEST
// move(10);

// Part 3:

// function aboutturn(deg) {
//     const pos = 187;
//     ev3_runToRelativePosition(ev3_motorB(), -pos * math_floor(deg / 90), 150);
//     ev3_runToRelativePosition(ev3_motorC(), pos * math_floor(deg / 90), 150);
//     ev3_pause(pos * math_floor(math_abs(deg) / 90) * 1000 / 150);
// }

// TEST
// aboutturn(90);


//Part 4:

// COPY move() and aboutturn() functions here
// function move(len_in_cm) {
//     const pos = 18.6;
//     ev3_runToRelativePosition(ev3_motorB(), len_in_cm * pos, 150);
//     ev3_runToRelativePosition(ev3_motorC(), len_in_cm * pos, 150);
//     ev3_pause((math_abs(len_in_cm) * pos * 1000) / 150);
// }

// function aboutturn(deg) {
//     const pos = 187;
//     ev3_runToRelativePosition(ev3_motorB(), -pos * math_floor(deg / 90), 150);
//     ev3_runToRelativePosition(ev3_motorC(), pos * math_floor(deg / 90), 150);
//     ev3_pause(pos * math_floor(math_abs(deg) / 90) * 1000 / 150);
// }

// const actions = list(
//                     move(10),
//                     // anti-clockwise
//                     ev3_pause(200),
//                     aboutturn(90),
//                     ev3_pause(200),
//                     move(5),
//                     // clockwise
//                     ev3_pause(200),
//                     aboutturn(-90),
//                     ev3_pause(200),
//                     move(15));

// TEST
// for_each(x=>x, actions);

//Mission 2: thing

// Part 1:
// function get_dist() {
//     const is_true = true;
//     if (is_true) {
//         display(ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) / 10);
//         ev3_pause(1000);
//         get_dist();
//     } else {
//         return 1;
//     }
// }

// TEST
// get_dist();

// Part 2:
// function get_dist() {
//     return display(ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) / 10);
// }

// function checker() {
//     ev3_motorSetSpeed(ev3_motorB(), 150);
//     ev3_motorSetSpeed(ev3_motorC(), 150);
//     ev3_motorSetStopAction(ev3_motorB(), "brake");
//     ev3_motorSetStopAction(ev3_motorC(), "brake");
    
//     if (get_dist() <= 10) {
//         ev3_motorStop(ev3_motorB());
//         ev3_motorStop(ev3_motorC());
//         ev3_pause(200);
//         move(-30);
//     } else {
//         ev3_motorStart(ev3_motorB());
//         ev3_motorStart(ev3_motorC());
//         checker();
//     }
// }

// TEST
// checker();

// Part 3: TBC

function get_dist() {
    return display(ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) / 10);
}

//V1
function dodge() {
    ev3_motorSetSpeed(ev3_motorB(), 250);
    ev3_motorSetSpeed(ev3_motorC(), 250);
    ev3_motorStart(ev3_motorB());
    ev3_motorStart(ev3_motorC());

    if (get_dist() <= 15) {
        
        ev3_motorStop(ev3_motorB());
        ev3_motorStop(ev3_motorC());
        ev3_pause(100);
        
        let angle = 0;
        if (math_floor(math_random() * 2) === 0) {
             angle = 90;
        } else {
             angle = -90;
        }
        aboutturn(angle);
        
        ev3_motorStart(ev3_motorB());
        ev3_motorStart(ev3_motorC());
        ev3_pause(6000);
        aboutturn(angle * -1);
        dodge();
    } else {
        dodge();
    }
}

// V2 (NOT WORKING)
// function dodge() {
//     display("dodge");
//     ev3_motorSetSpeed(ev3_motorB(), 250);
//     ev3_motorSetSpeed(ev3_motorC(), 250);
//     function after(a) {
//         display("after");
//         ev3_motorStart(ev3_motorB());
//         ev3_motorStart(ev3_motorC());
//         ev3_pause(2000);
//         aboutturn(-1 * a);
//         ev3_pause(5000);
//         get_dist();
//         if (get_dist() <= 20) {
//             ev3_motorStop(ev3_motorB());
//             ev3_motorStop(ev3_motorC());
//             ev3_pause(200);
//             aboutturn(a);
//             after(a);
//         } else {
//             ev3_motorStart(ev3_motorB());
//             ev3_motorStart(ev3_motorC());
//         }
//     }
    
//     ev3_motorStart(ev3_motorB());
//     ev3_motorStart(ev3_motorC());
//     if (get_dist() <= 20) {
//         ev3_motorStop(ev3_motorB());
//         ev3_motorStop(ev3_motorC());
//         ev3_pause(200);

//         let angle = 0;
//         if (math_floor(2 * math_random()) === 1) {
//             angle = 90;
//         } else {
//             angle = -90;
//         }

//         aboutturn(angle);
//         after(angle);
//     } else {
//         dodge();
//     }
// }

// dodge();

//Mission 3: more things


// Part 1 ??
// function get_light() {
//     while(true) {
//         // display(ev3_colorSensorGetColor(ev3_colorSensor()));
//         display(ev3_reflectedLightIntensity(ev3_colorSensor()));
//         ev3_pause(1000);
//         get_light();
//     }
// }
// get_light();




// Part 2  ??
function aboutturn(deg) {
    const pos = 190;
    ev3_runToRelativePosition(ev3_motorB(), (-pos/90) * deg, 150);
    ev3_runToRelativePosition(ev3_motorC(), (pos/90) * deg, 150);
    ev3_pause((pos/90) * math_abs(deg) * 1000 / 150);
}

function get_color() {
    return ev3_colorSensorGetColor(ev3_colorSensor());
}

// V2 WIP
function follow_line() {
    display("follow line");
    const black_color = 1; //adjust value
    ev3_motorSetSpeed(ev3_motorB(), 150);
    ev3_motorSetSpeed(ev3_motorC(), 150);
    function move_backwards() {
        if (get_color() !== black_color) {
            move(-1);
            move_backwards();
        } else {
            follow_line();
        }
    }
    if (get_color() === black_color) {
        ev3_motorStart(ev3_motorB());
        ev3_motorStart(ev3_motorC());
        ev3_pause(500);
        aboutturn(-10);
        follow_line();
    } else {
        aboutturn(10);
        if (get_color() === black_color) {
            follow_line();
        } else {
            move_backwards();
        }
    }
}

// follow_line();

// kind of working part 3
// function aboutturn(deg) {
//     const pos = 190;
//     ev3_runToRelativePosition(ev3_motorB(), (-pos/90) * deg, 150);
//     ev3_runToRelativePosition(ev3_motorC(), (pos/90) * deg, 150);
//     ev3_pause((pos/90) * math_abs(deg) * 1000 / 150);
// }

// function get_color() {
//     return ev3_colorSensorGetColor(ev3_colorSensor());
// }

// function follow_line() {
//     display("follow line");
//     const black_color = 1; //adjust value
//     ev3_motorSetSpeed(ev3_motorB(), 150);
//     ev3_motorSetSpeed(ev3_motorC(), 150);
//     function move_backwards() {
//         if (get_color() != black_color) {
//             move(-1);
//         } else {
            
//         }
//     }
//     if (get_color() === black_color) {
//         ev3_motorStart(ev3_motorB());
//         ev3_motorStart(ev3_motorC());
//         ev3_pause(500);
//         aboutturn(-10);
//         follow_line();
//     } else {
//         move(-1);
//         aboutturn(10);
//         follow_line();
//     }
// }

// Part 3 ??
let angle = 45;

function follow() {
    const black_color = 3; //margin for error?
    ev3_motorSetSpeed(ev3_motorB(), 150);
    ev3_motorSetSpeed(ev3_motorC(), 150);
    ev3_motorStart(ev3_motorB());
    ev3_motorStart(ev3_motorC());
    
    while (get_color() < black_color) {
        follow(); //actl this might end up wonk
    }
    display(angle);
    aboutturn(angle);
    if (get_color() <= black_color) {
        display("one");
        follow();
    } else {
        display("two");
        aboutturn(angle);
        if (get_color() <= black_color) {
            display("three");
            follow();
        } else {
            display("four");
            angle = -1 * angle;
            aboutturn(-90);
            follow();
        }
    }
    follow();
}



function follow_line1() {
    display("follow line");
    const black_color = 1; //adjust value
    ev3_motorSetSpeed(ev3_motorB(), 150);
    ev3_motorSetSpeed(ev3_motorC(), 150);
    ev3_motorStart(ev3_motorB());
    ev3_motorStart(ev3_motorC());

    if (get_color() === black_color) {
        ev3_motorStart(ev3_motorB());
        ev3_motorStart(ev3_motorC());
        ev3_pause(500);
        aboutturn(-90);
        follow_line();
    } else {
        aboutturn(10);
        follow_line1();
    }
}

follow_line1();