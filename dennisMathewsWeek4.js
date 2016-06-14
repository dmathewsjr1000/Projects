// Write a function that will create an array of numbers that are found in the Fibonacci sequence that are less than 10,000. The first ten elements in the array will look like the following:
// [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// Write a program that will find the sum of all even Fibonacci numbers less than 4,000,000.

if (array[0] === undefined) {
		array.push(1);
		array.push(array[0] + array[0]);
	}

for (var i = 0; i < 10000; i++) {

	if (array[d] < 10000) {

		
		array.push(array[i] + array[d]);
		d++;



 	}
}
array.pop(array[d]);
console.log(array);

}

function even(array) {

var sum = 0;
var hold = pattern(array);

	for (var f = 0; f < array.length; f++) {		
		if (array[f] < 4000000 && array[f] % 2 === 0) {

			sum += array[f];
	}
}
 return sum;	
}
even(fibon);

// Code Challenge 
// Write a simple program that will reverse the following string: "It never rains in Southern California."  You cannot use the reverse() method as part of your solution.

var hobby = 'It never rains in Southern California.';
var space = ' ';
var temp = [];

function split1(splitString, apart) {
	var array = splitString.split(apart);
	
	console.log('The array has ' + array.length + ' elements: ' + array.join(' / '));

for (var i = array.length; i >= 0; i--) {
	 temp.push(array[i]);
	//temp += array[i];
}
var rtemp = temp.join(" ");
console.log(rtemp);
}


split1(hobby, space);