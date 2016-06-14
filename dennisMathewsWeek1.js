// Question 1
// This program counts the spaces between words
function split1(splitString, apart) {
	var array = splitString.split(apart);

	console.log('The original string is: "' + splitString + '"');
	console.log('The separator is: "' + apart + '"');
	console.log('The array has ' + array.length + ' elements: ' + array.join(' / '));
	return 'The array has ' + array.length + ' elements: ' + array.join(' / ');

}

var hobby = 'Oh I love to play magic the gathering and video games every month.';
var space = ' ';

split1(hobby, space);

// Question 2
// This program counts the vowels in the string
var hobby = 'Oh I love to play magic the gathering and video games every month.';   
var space = '';
var d = 0;
function count() {
	var array1 = hobby.toLowerCase().split(space);
for (var i = 0; i < array1.length; i++) {
	if (typeof array1[i] === 'string') {
		if (array1[i] === 'a' || array1[i] === 'e' || array1[i] === 'i' || array1[i] === 'o' || array1[i] === 'u') {
			
				d++;
				

    }
  }
 }
 				return 'The array has ' + d + ' vowels. ';
}

// Question 3
// A constructor function that return area of shape
function Shape(height, width) {

    this.height = height;
    this.width = width;

    var total = this.height * this.width;

    console.log('This is your height of your shape: ' + this.height);
    console.log('This is your width of your shape: ' + this.width);

    return 'The area of your ' + this.height + ' x ' + this.width + ' shape is: ' + total;
}

// Create a new object call area
 var area = new Shape(5500, 1000);



// Code Challenge 1
// Make a function that take all odds numbers from array and make odd array  
var odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 function mod() {
 	var odd2 = [];
	for (var i = 0; i < odd.length; i++) {
		if (typeof  odd[i] === 'number') {
			if (odd[i] % 2 !== 0) {
				  odd2.push(odd[i]);
				
			}
		}
	}
	 return "The odd numbers in this array are: " + odd2;
}
	mod(odd);

	// Writing Assignment
	https://medium.com/@dmathewsjr07106/functions-methods-fb017226da79#.g6rjj6w9g

	