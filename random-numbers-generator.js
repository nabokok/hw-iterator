function* generateRandomNumbers(max, quantity) {
	let count = 0;
    if (quantity <= 0) {
        console.log('Incorrecr quantity')
    }
    while (count < quantity) {
        yield Math.round(Math.random() * max);
        count++;
    }
}

let gen = generateRandomNumbers(42, 3);

for (let num of gen) {
	console.log(num);
}

