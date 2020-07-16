
let sum = 0;
for (let i=0; i<1000; i++) {
    if(i%3===0 || i%5===0) {
        sum += i;
    }
}
console.log(sum);


let last = 1;
let curr = 2;

let total = 2;
while (curr < 4000000) {
    let temp = curr;
    curr = last + curr;
    last = temp;
    if (curr%2===0) {
        total += curr;
    }
}
console.log(total);


function isPrime(pnumber) {
    for (let i=2; i < ((pnumber/2)+1); i++) {
        if (pnumber%i === 0) {
            return false;
        }
    }
    return true;
}

let num = 600851475143;
let highest_prime = 0;
for (let i = 0; i < ((num/2)+1); i++) {
    if (num%i === 0 && isPrime(i)) {
        highest_prime = i;
    }
}

console.log(highest_prime);

