const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ?   5 :
           kinds_of_coins === 2 ?  10 :
           kinds_of_coins === 3 ?  20 :
           kinds_of_coins === 4 ?  50 :
           kinds_of_coins === 5 ? 100 : 0;
}

// The non-memoized version.
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

// The memoized version.
// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    if (n < 0 || read(n, k) === undefined) {
        
        const result = 
            n === 0 ? 1 :
            n < 0 || k === 0 ? 0 :
            mcc(n, k - 1) + mcc(n - first_denomination(k), k);
        
        if (n >=0 && k >= 0) {
            write(n, k, result);
        }
        
        return result;
    } else {
        return read(n, k);
    }
}

mcc(365, 5);  // Expected result: 1730



/////////////////////////////////////////////////////
function bubblesort_list(L) {
    const len = length(L);
    let current = L;
    
    for (let i = len - 1; i >= 1; i = i - 1) {
        for (let j = 0; j < i; j = j + 1) {
            
            if (head(current) > head(tail(current))) {
                const tmp = head(current);
                set_head(current, head(tail(current)));
                set_head(tail(current), tmp);
            }
            
            current = tail(current);
        }
        
        current = L;
    }
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]
