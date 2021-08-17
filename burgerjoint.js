// functions check for valid input and returns -1 for invalid input combo
// functions do not check for integer inputs, should enforce type checking


// upsizes combos 1-4, returns -1 for all other values
function biggie_size(combo) {
    return 0 < combo && combo < 5
        ? combo + 4
        : -1;
}

// downsizes combos 5-8, returns -1 for all other values
function unbiggie_size(combo) {
    return 4 < combo && combo < 9
        ? combo - 4
        : -1;
}

function is_biggie_size(combo) {
    return 4 < combo && combo < 9;
}

// calculates combo prices for combos 1-8, returns -1 for all other values
function combo_price(combo) {
    return 0 < combo && combo < 9
        ? is_biggie_size(combo)
            ? 0.50 + (unbiggie_size(combo) * 1.17)
            : combo * 1.17
        : -1;
}

function empty_order() {
    return 0;
}

// returns -1 if invalid combo input
// note: should check for valid order
function add_to_order(order, combo) {
    return 0 < combo && combo < 9
        ? order * 10 + combo
        : -1;
}

// note: should check for valid order
function last_combo(order) {
    return order % 10;
}

// note: should check for valid order
function other_combos (order){
    return order > 0
        ? math_floor(order / 10)
        : -1;
}

/* lessons learnt
forgot about the biggie_size() and unbiggie_size() functions in combo_price()
important for maintenance of code and modular abstraction!

parameters vs arguments
parameters are during function definition
arguments are actual values passed down to functions

alternative other_combos solution
function other_combos (order) {
    return order > 0
        ? (order - last_combo(order)) / 10
        : -1;
}
*/

