function append(xs, ys) {
    function append_help(xs, ys, c) {
        return is_null(xs)
            ? c(ys)
            : append_help(tail(xs), ys, x => c(pair(head(xs), x)));
    }
    
    return append_help(xs, ys, x => x);
}

append(list(1,2,3), list(4,5,6));