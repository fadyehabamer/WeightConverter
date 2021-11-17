let output = document.getElementById("output");

output.style.visibility = "hidden";

let lbsInput = document.getElementById("lbsInput");
let gramsOutput = document.getElementById("gramsOutput");
let kgOutput = document.getElementById("kgOutput");
let ozOutput = document.getElementById("ozOutput");

lbsInput.addEventListener("input", (e) => {
  output.style.visibility = "visible";
  let lbs = e.target.value;
  gramsOutput.innerHTML = (lbs / 0.0022046).toFixed(2);
  kgOutput.innerHTML = (lbs / 2.2046).toFixed(3);
  ozOutput.innerHTML = (lbs * 16).toFixed(0);
});
