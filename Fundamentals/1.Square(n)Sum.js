// 1) Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// way: 1

function squareSum(numbers) {
    let sum = 0;
    numbers.map((number) => {
        sum = sum + number ** 2;
    })
    return sum
}

var result = squareSum([1, 2, 2])
console.log(result)



// way: 2

function squareSum(numbers) {
    return numbers.reduce((s, a) => s + a * a, 0);
}

var result = squareSum([1, 2, 2])
console.log(result)
