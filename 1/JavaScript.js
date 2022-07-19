let sia = ["abc", "d", "efghi", "j", "klmnop", "qr", "st", "uv", "wxyz"];

console.log(sia);

const myName = [
  sia[2][0],
  sia[4][1],
  sia[2][0],
  sia[4][3],
  sia[0][0],
  "",
  sia[4][0],
  sia[7][0],
  sia[4][5],
  sia[0][0],
  sia[5][1],
  sia[0][0],
  sia[1][0],
  sia[8][3],
  sia[2][0],
];
console.log(myName);
console.log(
  `${myName[0]}${myName[3]}${myName[0]}${myName[6]}${myName[7]}${myName[8]}`
);

let varOne = parseInt(prompt("What is your first favourite number?"));
let varTwo = parseInt(prompt("What is your second favourite number?"));
let varThree;

function addValue(one, two, three) {
  sia.push(one, two, three);
}

addValue(varOne, varTwo, varThree);

console.log(sia);
