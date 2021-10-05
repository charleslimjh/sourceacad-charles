// Studio 10J
// Charles, Debbie, Han Wen, Sean, Shan, Ethan, Jia Cheng, Yuan Zheng

//Mission 1: Getting started
//Part1 1: 
// ev3_speak("Vimuth is the best");

function position() {
    display(ev3_motorGetPosition(ev3_motorB()));
    display(ev3_motorGetPosition(ev3_motorC()));    
}

//Part 2:

function move(len_in_cm) {
    const pos = 18.6;
    ev3_runToRelativePosition(ev3_motorB(), len_in_cm * pos, 150);
    ev3_runToRelativePosition(ev3_motorC(), len_in_cm * pos, 150);
    ev3_pause((len_in_cm * pos * 1000) / 150);
}

// move(10);

// Part 3:

function aboutturn(deg) {
    const pos = 187;
    ev3_runToRelativePosition(ev3_motorB(), -pos * math_floor(deg / 90), 150);
    ev3_runToRelativePosition(ev3_motorC(), pos * math_floor(deg / 90), 150);
    ev3_pause(pos * math_floor(math_abs(deg) / 90) * 1000 / 150);
}

// aboutturn(90);
// aboutturn(-90);


//Part 4:

const actions = list(
                    move(10),
                    // anti-clockwise
                    ev3_pause(10000),
                    aboutturn(90),
                    ev3_pause(10000),
                    move(5),
                    // clockwise
                    ev3_pause(10000),
                    aboutturn(-90),
                    ev3_pause(10000),
                    move(15));

function do_actions(lst) {
    for_each(x=>x, lst);
}

do_actions(actions);

//Mission 2: thing


//Mission 3: more things