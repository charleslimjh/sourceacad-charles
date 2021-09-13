function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}

my_map(x => x * x, list(1,2,3));

function remove_duplicates(lst) {
    return is_null(lst)
    ? null
    : pair(head(lst), remove_duplicates(
        filter(x => x !== head(lst), tail(lst))));
}

function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
        
    } else if (x < 0 || is_null(coins)) {
        return null;
        
    } else {
        // Combinations that do not use the head coin
        const combi_A = makeup_amount(x, tail(coins));
        
        // Combinations that do not use the head coin 
        // for the remaining amount
        // const combi_B = makeup_amount(x, 
        //    remove_all(head(coins), coins));
            
        // Combinations that use the head coin
        const combi_C = map(x => append(list(head(coins)), x),
                     makeup_amount(x - head(coins), tail(coins)));
        
        return append(combi_A, combi_C);
        
    }
}

map(x => display(list_to_string(x)), makeup_amount(22, list(1,10,5,20,1,5,1,50)));