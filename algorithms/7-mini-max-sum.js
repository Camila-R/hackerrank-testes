'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    
    let totalSum = 0;
    let minNum = Infinity;
    let maxNum = -Infinity;

    for (let num of arr) {
        totalSum += num;
        if (num < minNum) minNum = num;
        if (num > maxNum) maxNum = num;
    }

    let minSum = totalSum - maxNum;
    let maxSum = totalSum - minNum;

    console.log(minSum, maxSum);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
