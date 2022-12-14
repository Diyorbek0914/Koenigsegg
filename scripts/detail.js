const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");

axios
  .get(`http://localhost:3000/KOENIGSEGG/${myParam}`)
  .then((response) => {

    const detail = document.querySelector("#detail");
    detail.setAttribute("class", "h-screen bg-black py-20 px-32 space-y-10")

    const header = document.createElement("h1");
    header.innerText = response.data.model;
    header.setAttribute("class", "text-8xl font-semibold text-white")

    const myimage = document.createElement("img");
    myimage.setAttribute("src", response.data.imageURL)
    myimage.setAttribute("class", "max-w-2xl  rounded-lg")

    detail.append(header, myimage);
  })

  .catch((error) => {
    console.log(error);
  });
