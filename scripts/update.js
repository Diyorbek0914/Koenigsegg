const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");

axios
  .get(`http://localhost:3000/KOENIGSEGG/${myParam}`)
  .then((response) => {
    console.log(response);
    const modelInp = document.querySelector("#model");
    const imageInp = document.querySelector("#image");

    modelInp.value = response.data.model;
    imageInp.value = response.data.imageURL;
  })

  .catch((error) => {
    console.log(error);
  });



  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
  e.preventDefault();
  const modelInp = document.querySelector("#model");
  const imageInp = document.querySelector("#image");

  putData(modelInp.value, imageInp.value, myParam);
});

const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", handleDelete);

function handleDelete() {
  deleteData(myParam);
};