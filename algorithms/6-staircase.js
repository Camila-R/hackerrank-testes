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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    
    n = n - 1
    
    for(var i = n; i >= 0; i--){
        console.log(" ".repeat(i) + "#".repeat((n - i) + 1))
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
