// calculating eligibility for voting

function voting() {
  let age = document.getElementById("age");
  if (age.value >= 18) {
    document.getElementById("result").textContent =
      "You are above 18, so you can vote";
    document.getElementById("container").classList.add("posi-result-container");
    document
      .getElementById("container")
      .classList.remove("nega-result-container");
  } else {
    document.getElementById("result").textContent =
      "You are below 18, so you can't";
    document
      .getElementById("container")
      .classList.remove("posi-result-container");
    document.getElementById("container").classList.add("nega-result-container");
  }
}

//multiplication table from 1 to 10

function table() {
  let number = document.getElementById("number");
  let n = 10;
  let table = "";
  for (let i = 1; i <= n; i++) {
    // table += "<li>";
    table += number.value + " X " + i + " = " + number.value * i + "<br>";
    // table += "</li>";
  }
  document.getElementById("container_table").classList.remove("container");
  document.getElementById("container_table").classList.add("container_table");
  document
    .getElementById("container_table")
    .classList.add("posi-result-container");
  document.getElementById("result_table").innerHTML = table;
}

// converting dollar to inr

function converting() {
  let dollar = document.getElementById("dollar");
  document.getElementById("result_inr").textContent =
    dollar.value + "DOLLARS --> " + dollar.value * 74.5 + "Rupees";
  document
    .getElementById("container_inr")
    .classList.add("posi-result-container");
}
