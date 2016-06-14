// Question 1
// Making a random array 
var shoplist = ["computer", "iphone", "racecar", "macbook", "ipad", "android"];
// Looping though the indexs of array and captialize the elements in array
for ( var i = 0; i < shoplist.length; i++) {
	console.log(shoplist[i].toUpperCase());
}

// Question 2
// Making a random array
var table = [45, 22090909, 5698, 90433, 43431, 3454115, 43002, 109981, 545, 14345435, 1009282, 90909, 13233, 443535, 14782920, 49304, 434];
// Looping though the indexs of array and printing out the odd numbers
for (var i = 0; i < table.length; i++) {
	if (table[i] % 2 === 0) {
		console.log(table[i]);
	}
}

// Blog Post
// https://medium.com/@dmathewsjr07106/the-basics-of-java-programming-ddac3295c47b#.kslj5gjlj

// Fizz Buzz Challenge
 Code Challenge
var random = ["49ers", 3, 5, 6, 7, "Dennis", 8, 9, 10, 15, 20, 24, 25, "Junior"];
	for(var i = 0; i < random.length; i++) {
	  if (typeof random[i] === 'number') {	
		if (random[i] % 3 === 0){
			console.log(random[i] + " is a multiple of  3.");
		}
		else if(random[i] % 5 === 0) {
			console.log(random[i] + " is a multiple of  5.");
		}
		}
		else {
			console.log(random[i] + " is not a number.");
		}
	} 