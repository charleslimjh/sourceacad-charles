function memo_fun(fun) {
    let already_run = false;
    let result = undefined;
    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}

function stream_map_optimized(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
            memo_fun( () => stream_map_optimized(
                f, stream_tail(s)) ));
}

// TEST
// const x = stream_map_optimized(display, enum_stream(0, 10));
// stream_ref(x, 3);
// stream_ref(x, 5);

function zip_list_of_streams(streamList) {
    const totalStream = length(streamList);
    let tmp = streamList;
    
    function help() {
        let currentStream = head(tmp);
        let currentValue = head(currentStream);
    
        display(currentStream);
        display(currentValue);
        
        // move onto next pair in current stream,
        // then move on to the next stream in the list
        set_head(tmp, stream_tail(currentStream));
        tmp = tail(tmp);
        
        // if reached end of the list, set tmp back to start of list
        if (is_null(tmp)) {
            tmp = streamList;
        }
        
        return pair(currentValue, () => help());
    }
    
    return help();
}


// TEST
// function myStream(n) {
//     function help(a) {
//         return pair(n * a, () => help(a + 1));    
//     }
//     return help(1);
// }

// const ones = myStream(1);
// const twos = myStream(2);
// const threes = myStream(3);

// const zip = zip_list_of_streams(list(ones, twos, threes));
// stream_ref(zip, 11);

function add_streams(s1, s2) {
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1;
    } else {
        return pair(head(s1) + head(s2),
                    () => add_streams(stream_tail(s1),
                        stream_tail(s2)));
    }
}

function partial_sums(s) {
    
    function help(cs) {
        return pair(head(cs), () => help(add_streams(stream_tail(cs), s)));
    }
    
    return help(s);
}

// TEST
const integers = integers_from(1);
stream_ref(partial_sums(integers), 5);