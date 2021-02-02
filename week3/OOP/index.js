const monoply = [
  0,
  -20,
  -100,
  50,
  -500,
  100,
  -20,
  70,
  -15,
  125,
  -100,
  50,
  -200,
  10,
];
// const player1 = {
//   name: 'Rabuil',
//   money: 1000,
//   position: 0,
//   color: 'blue',
//   play: function() {
//     this.diceRoll = Math.ceil(6 * Math.random());
//     const newPostion = (this.position + this.diceRoll) % monoply.length;
//     this.money += monoply[newPostion];
//     this.position = newPostion;
//   },
//   displayInfo: function() {
//     if(this.money <= 0) {
//       console.log('player 1 lost the game')
//     } else {
//       console.log(`Player1 rolled: ${this.diceRoll}
// and moved to ${this.position}
// his current balance is: ${this.money}`);
//     }
//   }
// }

class Player {
  constructor(name, money, position, color) {
    this.name = name;
    this.money = money;
    this.position = position;
    this.color = color;
  }
  play() {
    this.diceRoll = Math.ceil(6 * Math.random());
    const newPostion = (this.position + this.diceRoll) % monoply.length;
    this.money += monoply[newPostion];
    this.position = newPostion;
  }
  displayInfo() {
    if (this.money <= 0) {
      console.log(`${this.name} lost the game`);
    } else {
      console.log(`${this.name} rolled: ${this.diceRoll} 
and moved to ${this.position}
his current balance is: ${this.money}`);
    }
  }
}

const player1 = new Player("Rabuil", 1000, 0, "Blue");
const player2 = new Player("Nick", 1000, 0, "Grey");
const player3 = new Player("Stefan", 1000, 0, "Green");

const arr = new Array();

console.log(arr);
