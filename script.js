const count = new Array(11).fill(0); //frequencia da soma do lançamento de um dado
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
    count[rollOfDice - 2] = count[rollOfDice - 2] + 1;
  }
  return count;
}
rollNTwoDice(1000);
function createLi(frequency, index) {
  let tagLi = document.createElement("li");
  tagLi.innerText = `${index + 2}: ${frequency}`;
  return tagLi;
}
function showlist() {
  let body = document.querySelector("body");
  let main = document.createElement("main");
  main.classList.add("container");
  body.appendChild(main);
  let list = document.createElement("ul");
  count.forEach((element, index) => list.appendChild(createLi(element, index)))
  main.appendChild(list);
}
function createBar(larguraDaBarra, index) {
  let minhaBarra = document.createElement("div");
  minhaBarra.innerText = `${index + 2}`;
  minhaBarra.style.width = `${larguraDaBarra}px`
  minhaBarra.style.background = "yellow";
  return minhaBarra;
}
function showBars() {
  let main = document.querySelector("main");
  let bars = document.createElement("div");
  count.forEach((element, index) => bars.appendChild(createBar(element, index)));
  main.appendChild(bars);
}
showlist();
showBars();
