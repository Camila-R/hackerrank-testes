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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    
    const array = arr;
    const denominador = array.length
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    
    array.forEach((element) => {
        if(element < 0){
            negative ++            
        } else if(element > 0){
            positive ++
        } else{
            zeros ++
        }       
    })
    
    let negativeRatio = negative/denominador
    let positiveRatio = positive/denominador
    let zerosRatio = zeros/denominador
    
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zerosRatio.toFixed(6));
 
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
