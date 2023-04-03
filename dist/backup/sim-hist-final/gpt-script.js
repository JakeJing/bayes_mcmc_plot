function normal(mu, sd) {
  let u1 = 1 - Math.random(); // Converting [0,1) to (0,1]
  let u2 = 1 - Math.random();
  let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(Math.PI * 2 * u2);
  return z0 * sd + mu;
}

function simulateNormal(mu, sd, n) {
  const data = [];
  for (let i = 0; i < n; i++) {
    const value = normal(mu, sd);
    data.push(value);
  }
  return data;
}

function plotHistogram(data) {
  const layout = {
    title: "Normal Distribution",
    xaxis: {
      title: "Value",
    },
    yaxis: {
      title: "Count",
    },
  };
  const trace = {
    x: data,
    type: "histogram",
    autobinx: false,
    xbins: {
      start: Math.min(...data),
      end: Math.max(...data),
      size: 0.1,
    },
  };
  Plotly.newPlot("histogram", [trace], layout);
}

// Get DOM elements
const simulateButton = document.getElementById("simulate");
const plotButton = document.getElementById("plot");
const muInput = document.getElementById("mu");
const sdInput = document.getElementById("sd");
const nInput = document.getElementById("n");
const messageDiv = document.getElementById("message");

// Define the simulatedData variable
let simulatedData = [];
// uses the let keyword to define the simulatedData outside of the event listeners, so that it can be accessed and updated by both the "Simulate" and "Plot" button event listeners. The "Simulate" button event listener now sets the simulatedData variable to the simulated data, so that it can be used later when the "Plot" button is clicked.

// Add event listener for the "Simulate" button
simulateButton.addEventListener("click", function () {
  const mu = parseFloat(muInput.value);
  const sd = parseFloat(sdInput.value);
  const n = parseInt(nInput.value);
  const data = simulateNormal(mu, sd, n);
  messageDiv.innerHTML = "Simulation done!";
  simulatedData = data;
});

// Add event listener for the "Plot" button
plotButton.addEventListener("click", function () {
  plotHistogram(simulatedData);
});
