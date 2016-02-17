var sayMyName = function (name) {
	alert('My name is: '+name);

}


var car = {
	make:'VW',				
	type: 'Polo',
	color: 'blue',				
	isTurnedOn: false,				
	numberOfWheels: 4,				
	seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
								
	/*this is a method*/
turnOn: function() {						
	this.isTurnedOn = true;

	},
	/*this is a different function*/
fly: function () {
	alert('fly');

	},
/*this is another function*/
switchCar: function (isOn) {
	console.log('turn car '+ isOn);
	if (isOn == true) {
	    this.isTurnedOn = true;

		} else {
		this.isTurnedOn = false;

		}

	}
};
	console.log('hello there');
				
