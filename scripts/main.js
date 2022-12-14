axios
  .get("http://localhost:3000/KOENIGSEGG")
  .then((response) => {
    const arraydata = response.data;
    const myDiv = document.querySelector("#myDiv");
    arraydata.forEach((element) => {
      console.log(element);

      const outerDiv = document.createElement("div");
      outerDiv.setAttribute("class", "grid py-20 justify-center mb-16 text-center rounded shadow-lg shadow-zinc-600");

      const carImage = document.createElement("img");
      carImage.setAttribute("src", element.imageURL);
      carImage.setAttribute("alt", element.model);
      carImage.setAttribute("class", "max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-xl rounded-lg");

      const innerdiv = document.createElement("div");
      innerdiv.setAttribute("class", "mx-8");

      const mymodel = document.createElement("h1");
      mymodel.setAttribute("class", "text-center text-xl py-8 font-semibold");

      const mylink = document.createElement("a");
      mylink.setAttribute("href", `./update.html?id=${element.id}`);
      mylink.setAttribute(
        "class",
        "text-md font-semibold py-2 px-16 border hover:border-emerald-500 hover:text-emerald-500"
      );
      mylink.innerText = "UPDATE";

      const mydetail = document.createElement("a");
      mydetail.setAttribute("href", `detail.html?id=${element.id}`);
      


      mymodel.innerText = element.model;

      innerdiv.append(mymodel, mylink);
      outerDiv.append(carImage, innerdiv);
      mydetail.append(outerDiv);
      myDiv.append(mydetail);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log(error.response);
  });
