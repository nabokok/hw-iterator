function* generatorNum() {
    let current = 1;
    let last = 100;

    while (current <= last) {
        if (current % 15 === 0) {
            yield 'FizzBuzz';
            current++
        } else if (current % 3 === 0) {
            yield 'Fizz';
            current++
        } else if (current % 5 === 0) {
            yield 'Buzz';
            current++
        } else {
            yield current++;
        }
    }
}

for (let num of generatorNum()) {
    console.log(num);
}