const count = new Array(12).fill(0);
function rollOneDice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
console.log(rollOneDice(1,6))
function rollTwoDice (min, max) {
  return [rollOneDice(min, max), rollOneDice(min, max)]
}
console.log(rollTwoDice(1,6))
function rollNTwoDice(n) {
  let rollOfDice
  for(let i = 0; i < n; i++) {
    rollOfDice = rollTwoDice(1, 6)[0] + rollTwoDice(1, 6)[0]
    count[rollOfDice - 1] = count[rollOfDice - 1] + 1;
  }
  return count;
}
console.log(rollNTwoDice(1000))