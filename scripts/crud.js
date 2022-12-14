function postData(pmodel, pimageURL) {
  axios
    .post("http://localhost:3000/KOENIGSEGG", {
      model: pmodel,
      imageURL: pimageURL,
    })
    .then((response) => {
      window.location.replace("megacrs.html");
    })
    .catch((error) => {
      console.log(error);
    });
}

function putData(pmodel,pimageURL,pid) {
  axios
    .put(`http://localhost:3000/KOENIGSEGG/${pid}`, {
      model:pmodel,
      imageURL:pimageURL,
    })
    .then((response) => {
      window.location.replace("megacrs.html");
    })
    .catch((error) => {
      console.log(error);
    });
}


function deleteData(pid){
  axios
  .delete(`http://localhost:3000/KOENIGSEGG/${pid}`)
  .then((response) => {
    window.location.replace("megacrs.html");
  })
  .catch((error) => {
    console.log(error);
  });
}