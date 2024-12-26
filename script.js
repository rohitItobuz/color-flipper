const btn_blue = document.getElementById("btn-blue");
const btn_grey = document.getElementById("btn-grey");
const btn_green = document.getElementById("btn-green");
const btn_sky = document.getElementById("btn-sky");
const container = document.getElementById("container");

btn_blue.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(149, 149, 252)";
});

btn_grey.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(224, 223, 223)";
});

btn_green.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(187, 253, 192)";
});

btn_sky.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(187, 238, 253)";
});
