const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const modelInp = document.querySelector("#model");
  const imageInp = document.querySelector("#image");

  postData(modelInp.value, imageInp.value);
});
