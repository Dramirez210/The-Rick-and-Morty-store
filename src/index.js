const urlBase = "https://rickandmortyapi.com/api/";

const appNode = document.querySelector("#app");
// web api
// conectarnos al server
window
  .fetch(`${urlBase}character`) //devuelve promesa
  //procesar la respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  // JSON -> Data -> Rendeerizar infor browser
  .then((responseJson) => {
    const items = [];
    responseJson.results.forEach((element) => {
      //create image
      const image = document.createElement("img");
      image.className =
        "h-16 w-16 md:h-24 md:w-24 rounded-lg mx-auto md:mx-0 md:mr-6";
      image.src = element.image;

      //create title
      const title = document.createElement("h2");
      title.className = "text-lg font-bold text-white";
      title.textContent = element.name;
      // titulo.style = "font-size: 2rem";  titulo.style.fontSize = "2rem";

      //create status
      const status = document.createElement("p");
      status.className = "text-yellow-200";
      status.textContent = element.status;

      //create species
      const species = document.createElement("p");
      species.className = "text-pink-400";
      species.textContent = element.species;

      //create location
      const location = document.createElement("p");
      location.className = "text-green-200";
      location.textContent = element.location.name;

      //contenedor texto
      const titleStatus = document.createElement("div");
      titleStatus.className = "text-center md:text-left";
      titleStatus.append(title, status, species, location);

      //contenedor general
      const card = document.createElement("div");
      card.className =
        "md:flex rounded-lg p-6 m-2 bg-gray-700 hover:bg-gray-400";
      // card.className = "bg-gray-700 gallery-card rounded-lg flex justify-around items-center p-6 hover:bg-gray-400";
      card.append(image, titleStatus);

      items.push(card);
    });
    appNode.append(...items);
    appNode.className = "mt-10 grid grid-cols-2 gap-2";
  });
