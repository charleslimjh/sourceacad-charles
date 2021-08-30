function pascal(row, position) {
    return position === 0 || position === row
        ? 1
        : pascal(row - 1, position - 1) + pascal(row - 1, position);
}

display(pascal(4, 3));

/*
RECURSIVE PROCESS

p(4,3)
p(4-1, 3-1) + p(3-1, 3)
p(3,2) + p(3,3)
p(3-1, 2-1) + p(3-1, 2) + p(3,3)
p(2,1) + p(2,2) + p(3,3)
p(2-1, 1-1) + p(2-1, 1) + p(2,2) + p(3,3)
p(1, 0) + p(1,1) + p(2,2) + p(3,3)
1 + p(1,1) + p(2,2) + p(3,3)
1 + 1 + p(2,2) + p(3,3)
2 + p(2,2) + p(3,3)
2 + 1 + p(3,3)
3 + p(3,3)
3 + 1
4
*/