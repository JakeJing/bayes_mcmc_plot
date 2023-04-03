// Define the normal function
function normal(mu, sd) {
  let u1 = 1 - Math.random(); // Converting [0,1) to (0,1]
  let u2 = 1 - Math.random();
  let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(Math.PI * 2 * u2);
  return z0 * sd + mu;
}

let data = [];
let histogram = null;

function simulateNormal(mu, sd, n) {
  // data = [];
  // for (let i = 0; i < n; i++) {
  //   data.push(normal(mu, sd));
  // }
  data = Array.from({ length: n }, () => normal(mu, sd));
  // simulatedData = data;
  document.getElementById("message").innerHTML = "Simulation done!";
}

function plotHistogram() {
  const trace = {
    x: data,
    type: "histogram",
    marker: {
      color: "rgba(0, 123, 255, 0.7)",
      line: {
        color: "transparent",
        width: 1,
      },
    },
  };

  if (!histogram) {
    const layout = {
      autosize: true,
      margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 50,
        pad: 4,
      },
      xaxis: {
        title: "Value",
      },
      yaxis: {
        title: "Frequency",
      },
    };

    Plotly.newPlot("histogram", [trace], layout);
    histogram = true;
  } else {
    Plotly.update("histogram", { data: [trace] });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const simulateButton = document.getElementById("simulate");
  simulateButton.addEventListener("click", function () {
    const mu = parseFloat(document.getElementById("mu").value);
    const sd = parseFloat(document.getElementById("sd").value);
    const n = parseInt(document.getElementById("n").value);

    simulateNormal(mu, sd, n);
  });

  const plotButton = document.getElementById("plot");
  plotButton.addEventListener("click", function () {
    plotHistogram();
  });
});
