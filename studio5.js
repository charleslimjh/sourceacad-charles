function every_second(lst) {
    function iter(count, lst) {
        return is_null(lst)
        ? null 
        : count % 2 === 0
            ? pair(head(lst), iter(count + 1, tail(lst)))
            : iter(count + 1, tail(lst));
    }
    
    return iter(1, lst);
}

every_second(list(1,2,3,4,5,6));

function sums(lst) {
    function iter(is_even, lst, result) {
        return is_null(lst)
        ? result 
        : is_even
            ? iter(!is_even, tail(lst), list(head(result) + head(lst), head(tail(result))))
            : iter(!is_even, tail(lst), list(head(result), head(tail(result)) + head(lst)));
    }
    
    return iter(true, lst, list(0,0));
}

display(sums(list(1,2,3,4,5,6)));

function every_second_2(lst) {
    function iter(x, lst) {
        return is_null(lst)
            ? null
            : x === 1
                ? pair(head(lst), iter(-x, tail(lst)))
                : iter(-x, tail(lst));
    }
    
    return iter(-1, lst);
}

every_second_2(list(1,2,3,4,5,6));

// head(tail(xs) & tail(tail(lst))
function every_second_3(lst) {
    return is_null(lst) || is_null(tail(lst))
    ? null
    : pair(head(tail(lst)), every_second_3(tail(tail(lst))));
}

every_second_3(list(1,2,3,4));