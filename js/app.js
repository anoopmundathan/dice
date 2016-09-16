/**
 * Represents Dice
 * @constructor
 * @param {string} sides - The number of sides
 */
function Dice(sides) {
	this.sides = sides;
	this.roll = function() {
		return Math.floor(Math.random() * this.sides) + 1;	
	}
}

// Create new dice instance
var dice = new Dice(6);
var dice10 = new Dice(9);

console.log((dice.roll === dice10.roll));


document.getElementById('button').addEventListener('click', function(e) {
	// e.preventDefault();
	document.getElementById('random').innerHTML = dice.roll() +" " + dice10.roll();
})