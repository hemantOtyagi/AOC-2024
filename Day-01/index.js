//AOC Day - 01

const fs = require("fs");

const file = fs.readFileSync("sample.txt", 'utf-8' );
const leftList  = [];
const rightList  = [];


//Solution of problem one
const tempArray = file.split("\r")
tempArray.forEach((elem) => {
    leftList.push(Number(elem.split("   ")[0]));
    rightList.push(Number(elem.split("   ")[1]));
})

// console.log(leftList.sort());
// console.log(rightList.sort());

let sum= 0

for( let i=0 ; i< leftList.length ; i++){
    sum += Math.abs(leftList[i]-rightList[i]);
}


console.log(sum);

//Solution of problem two



const counts = {};
for (const num of rightList) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }


leftList.forEach((elem) => {
    if(counts[elem]){
        sum+= elem*counts[elem];
    }
})


console.log(sum);