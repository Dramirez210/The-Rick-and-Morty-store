/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// console.log("Happy hacking :)");

const urlBase = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";

//intl  --> formato a fechas o monedas
const formatPrice = (precio) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(precio);
  return newPrice;
};

const appNode = document.querySelector("#app");
// web api
// conectarnos al server
window
  .fetch(`${urlBase}/api/avo`) //devuelve promesa
  //procesar la respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  // JSON -> Data -> Rendeerizar infor browser
  .then((responseJson) => {
    const items = [];
    responseJson.data.forEach((element) => {
      //create image
      const imagen = document.createElement("img");
      imagen.className =
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
      imagen.src = `${urlBase}${element.image}`;

      //create title
      const titulo = document.createElement("h2");
      titulo.className = "text-lg";
      titulo.textContent = element.name;
      // titulo.style = "font-size: 2rem";  titulo.style.fontSize = "2rem";

      //create price
      const precio = document.createElement("div");
      precio.className = "text-gray-600";
      precio.textContent = formatPrice(element.price);

      //contenedor para precio y titulo
      const precioTitulo = document.createElement("div");
      precioTitulo.className = "text-center md:text-left";
      precioTitulo.append(titulo, precio);

      //contenedor
      const card = document.createElement("div");
      card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
      card.append(imagen, precioTitulo);

      items.push(card);
    });
    appNode.append(...items);
    appNode.className = "mt-10 grid grid-cols-2 gap-2";
  });
