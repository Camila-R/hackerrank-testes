// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9  
//
// The left-to-right diagonal = 1 + 5 + 9 = 15.
// The right-to-left diagonal = 3 + 5 + 9 = 17.
// Their absolute difference is 15 - 17 = 2.

// Function description

// Complete the diagonalFunction function with the following parameter:

// int arr[n][m]: a 2-D array of integers
// Return

// int: the absolute difference in sums along the diagonals
// Input Format

// The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
// Each of the next  lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    
    //Funciona para poucos numeros na matriz
    // const size = arr.length;
    // let diagonalSum = 0;
    // let counterDiagonalSum = 0;
    //
    // for (let i = 0; i < size; i++){
    //     for (let k = 0; k < size; k++){
    //         if (i === k){
    //             diagonalSum += arr[i][k];
    //         }
    //         if(i + k == size -1){
    //             counterDiagonalSum += arr[i][k]
    //         }
    //     }
    // }
    // let response = counterDiagonalSum - diagonalSum
    
    // return response
    
    //Opcao otimizada (GPT)
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonal += arr[i][i]; // Elementos da diagonal principal
        secondaryDiagonal += arr[i][n - 1 - i]; // Elementos da diagonal secundaria
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
