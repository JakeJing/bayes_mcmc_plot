var data = [];

document.getElementById("submit-btn").onclick = function fun() {
  data = setStatusTrue();
};
var form = document.querySelector("form");
function setStatusTrue() {
  var mu = parseFloat(form.elements.mu.value);
  var sd = parseFloat(form.elements.sd.value);
  var n = parseInt(form.elements.n.value);
  sim = d3.range(n).map(function () {
    return d3.randomNormal(mu, sd)();
  });
  return sim;
}

// if you use var name function() format, you always need to define a function before using it
// var simulate_data = function () {
//   data = d3.range(5).map(function () {
//     return d3.randomNormal(2, 3)();
//   });
// };

// also synchronize the function

// var form = document.querySelector("form");
// form.addEventListener("submit", function () {
//   event.preventDefault(); // seem to be important
//   var mu = parseFloat(form.elements.mu.value);
//   var sd = parseFloat(form.elements.sd.value);
//   var n = parseInt(form.elements.n.value);
//   window["data"] = d3.range(n).map(function () {
//     return d3.randomNormal(mu, sd)();
//   });
// });

// var X = 2.54;
// form.addEventListener("submit", handleOrientation, true);
// function handleOrientation(event) {
//   globalThis.X = X + 1;
//   console.log(X);
// }

if (Array.isArray(data) && data.length > 0) {
  console.log("Simulation is ok!");
} else {
  // data is not available, make a placeholder and generate a warning!
  console.error("Pls simulate some data!");
}
// console.log(Object.keys(data));
console.log(data);
