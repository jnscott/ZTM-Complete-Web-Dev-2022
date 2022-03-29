// Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, 
// give the target number. For example: answer([1,2,3], 4)should return [1,3]

const inputArray = [1,2,3,4,5,6,7,8,9,10];
const targetSum = 11;

function answer(inputArray, targetSum) {

    const res = [];
    inputArray.forEach((val) => {

        const diff = targetSum - val;
        if (diff !== val)
        {
            if (inputArray.filter(value => (diff === value)))
                res.push(new Array(val, diff));
        }
    });
 
   console.log(JSON.stringify(res));
}

answer(inputArray, targetSum);
