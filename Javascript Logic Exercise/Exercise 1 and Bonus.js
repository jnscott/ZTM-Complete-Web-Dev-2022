const inArr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const inArr2 = [1, "2", "3", 2];

function answer(input)
{
	const result = [];

	// unique sort the array by numeric value
	const uniqueArray = input.sort((a,b) => a-b).filter((el,i,a) => (i===a.indexOf(el)));

	uniqueArray.forEach (item => {

		// find out how many repeated values for each number
		let num = input.filter(x => x===item).length;

		// create the new array of the right size with the number
		let numArr = Array(num).fill(item);

		// insert into the result array
		result.push(numArr);

	} );

	console.log(JSON.stringify(result));

}

answer(inArr);
answer(inArr2);

function bonus(input)
{
	const result = [];
	const numericArray = [];
	const stringArray = [];

	// unique sort the array by numeric value
	const sortedArray = input.sort((a,b) => a-b);

	input.forEach (item => {

		// see if it is a number
		if (typeof item === 'string')
			stringArray.push(item);
		else
			numericArray.push(item);
	} );

	if (numericArray.length !== 0)
		result.push(numericArray.sort((a,b) => a-b));
	if (stringArray.length !== 0)
		result.push(stringArray.sort());

	console.log(JSON.stringify(result));
}

bonus(inArr);
bonus(inArr2);