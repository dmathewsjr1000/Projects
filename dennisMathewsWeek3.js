// Code Challenge - Problem Set 4

// Making my constructor function
function Mycar(make, model, color, miles, year) {
	
	// Declaring properties of my constructor function
		this.make = make;
		this.model = model;
		this.color = color;
		this.checkoil = false;

// Testing the properties for differnt results

  	if (year !== undefined) {
		this.year = year;
	}
	else{
		 this.year = 2016;
	}
	if (miles) {
		this.miles = miles;
	}
	else {
		this.miles = 0;
	}	

}

// Making methods of my constructor

Mycar.prototype.blowHorn = function() {
	// body...
	console.log('Honk! Honk!');
};
Mycar.prototype.tallyMiles = function(newmiles) {
	this.miles += newmiles;
	this.check();
};
Mycar.prototype.check = function() {
	if (this.miles % 1500 === 0) {
		this.checkoil = true;
	}
};

// Making new objects of my original constructor function

Chevy = new Mycar('Chevy', 'Impala', 'Sliver');
Ford = new Mycar('Ford', 'Focus', 'Navy Blue', 15000, 2015);
Honda = new Mycar('Honda', 'Accord', 'Blue', 10000, 2014);
GMC = new Mycar('GMC', 'Eqinox', 'Black','', 2015);
Lincoln = new Mycar('Lincoln', 'Navigator', 20000);

// Making another new constructor

function Dealership(name, address, cars) {
	this.name = name;
	this.address = address;
	this.cars = [];
	this.employee = [];
}

// Making methods of for my new constructor

Dealership.prototype.getCar = function(Mycar) {
	// Adding properties from my myCar constructor to a dealership constructor to that constructor's cars array
	this.cars.push(Mycar);
	for (var i = 0; i < this.cars.length; i++) {
		 console.log(this.cars[i]);
	}
};
Dealership.prototype.readOdometer = function(Mycar) {
	// Returning miles property from myCar constructor 
    return Mycar.miles;
};

// Making another new constructor

function Staff(ename, salary, year) {

		this.ename = ename;
		this.salary = salary;
		this.year = year;
		
}

// Making methods of for my previous constructor

Dealership.prototype.addEmployee = function(Staff) {
	// Adding properties from my Staff constructor to a employee array in Dealership 
	this.employee.push(Staff);
	for (var d = 0; d < this.employee.length; d++) {
		 console.log(this.employee[d]);
	}
};


// Tests results
Fiyyah = new Staff('Fiyyah', 100000, 2007);
Drew = new Staff('Andrew', 110000, 2006);
Junior = new Dealership('Junior Car World', 'Newark,NJ');
Chevy;
Junior;
Junior.getCar(Chevy);
Junior.getCar(Honda);
Junior.getCar(Ford);
Junior.getCar(Lincoln);
Junior.getCar(GMC);
Junior;
Junior.addEmployee(Fiyyah);
Junior.addEmployee(Drew);
Junior.cars[2].tallyMiles(1500);
Junior.cars[2].check;
Junior.cars[2];
Junior.employee;



// Code Challenge 1
function Product(num) {
	var sum = 0;
for(var f = 1; f <= num; f++) {
		if(f % 3 === 0 || f % 5 === 0) {
			sum += f;
	}
		
}
	return sum;
}

// Code Challenge 2
function sumArray(array) {
	var product = 0;

	for (var i = 0; i < array.length; i++) {
		total += array[i];
	};
	return total;
} 

function avgArray(array) {
	var sum = sumArray(array);

	var total = sum / array.length;

	return total;
}

// Code Challenge 3
function max(array) {
	var max = 0;

	for(var d = 0; d < array.length ; d++) {
		if (array[i] > max) {
			max = array[i];
		};
	}
	return max;
}

function min(array) {
	var min = 0;

	for(var d = 0; d < array.length ; d++) {
		if (i === 0) {
			min = array[i];
		};
		if (array[i] < min) {
			min = array[i];
		};
	}
	return min;
}

// Code Challenge 3
function range(array) {

	var high = max(array);
	var low = min(array);
	var range = high - low;

	return range;
}

// Code Challenge 4
function median(array) {

	var median, median1;

	if (array.length % 2 === 0) {
		median = array.length / 2;
		median1 = Math.floor(array[median] + array[median + 1] / 2);
		console.log(array[median1]);
	};
	else {
		median = Math.floor(array.length / 2);
	}
}