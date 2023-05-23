const display = document.getElementById("display");

const number = document.querySelectorAll("#number");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const equal = document.getElementById("equal");
const result = document.getElementById("result");
const clear = document.getElementById("clear");

number.forEach((res) =>
  res.addEventListener("click", () => {
    display.innerHTML += res.value;
  })
);

plus.addEventListener("click", () => {
  display.innerHTML += plus.textContent;
});

minus.addEventListener("click", () => {
  display.innerHTML += minus.textContent;
});

times.addEventListener("click", () => {
  display.innerHTML += times.textContent;
});

equal.addEventListener("click", () => {
  display.innerHTML += equal.textContent;
});

result.addEventListener("click", () => {
  let res = display.textContent.replace("×", "*");
  res = res.replace("÷", "/");
  display.innerHTML = eval(res);
});

clear.addEventListener("click", () => {
  display.innerHTML = "";
});
