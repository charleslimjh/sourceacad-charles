function append(lst1, lst2) {
    return is_null(lst1)
        ? lst2
        : pair(head(lst1), append(tail(lst1), lst2));
}

function flatten_list(tree) {
    return accumulate(append, null, tree);
}

function tree_sum(tree) {
    return is_null(tree)
        ? 0
        : is_list(head(tree))
            ? tree_sum(head(tree)) + tree_sum(tail(tree))
            : head(tree) + tree_sum(tail(tree));
}

function tree_sum2(tree) {
    return accumulate((x, y) => (is_list(x)
                        ? tree_sum2(x)
                        : x) + y,
                    0,
                    tree);
}

// tree_sum(list(1, list(2, list(3,4), 5), list(6, 7)));

function accumulate_tree(f1, f2, initial, tree) {
    function helper(tree) {
        return is_null(tree)
            ? initial
            : f2(is_list(head(tree))
                    ? helper(head(tree))
                    : f1(head(tree)), 
                helper(tail(tree)));
    }
    
    return helper(tree);
}



function accumulate_tree_sum(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0, tree);
}

function count_data_items(tree) {
    return accumulate_tree( x => 1, (x,y) => x + y, 0, tree);
}

function flatten(tree) {
    return accumulate_tree(x => list(x), append, null, tree);
}

accumulate_tree_sum(list(1, list(2, list(3,4), 5), list(6, 7)));
count_data_items(list(1, list(2, list(3,4), 5), list(6, 7)));
flatten(list(1, list(2, list(3,4), 5), list(6, 7)));