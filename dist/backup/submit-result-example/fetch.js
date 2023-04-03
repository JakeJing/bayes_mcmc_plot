// this script will be executed once when loading the page,
// the executation should be included in HTML

var problem1El = document.getElementById("problem1");
document.getElementById("problem1button").addEventListener("click", findSum);

function findSum() {
  var v = problem1El.value;
  document.getElementById("result").innerHTML = v;
}

function myfun() {
  var final = parseFloat(problem1El.value) + 10;
  document.getElementById("final").innerHTML = final;
}

// var newresult = myfun();
// console.log(newresult);
