let range = {
    from: 1,
    to: 100
}

range[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;

    return {
        next: function () {
            if (current % 15 === 0) {
                let result = {
                    done: false,
                    value: 'FizzBuzz'
                }
                current++;
                return result;

            } else if (current % 3 === 0) {
                let result = {
                    done: false,
                    value: 'Fizz'
                }
                current++;
                return result;

            } else if (current % 5 === 0) {
                let result = {
                    done: false,
                    value: 'Buzz'
                }
                current++;
                return result;

            } else if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

for (let num of range) {
    console.log(num);
}