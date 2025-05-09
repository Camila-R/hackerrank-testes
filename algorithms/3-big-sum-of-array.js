// In this challenge, you need to calculate and print the sum of elements in an array, considering that some integers may be very large.

// Function Description
// Complete the aVeryBigSum function with the following parameter(s):
// int ar[n]: an array of integers
//
// Return
// long: the sum of the array elements

// Input Format
// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// Output Format
// Return the integer sum of the elements in the array.

'use strict';

const fs = require('fs');

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
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here

    let sum = 0

    // Primeira Opcao
    // for(let i = 0; i < ar.length; i++){
    //     sum += ar[i]
    // }
    
    // Segunda Opcao
    ar.forEach((element) => {
        sum += element
    })
        
    return sum

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}
