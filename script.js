fetch("datos.json")
  .then((res) => res.json())
  .then((data) => {
        todosLosCombos = data.combos;

        mostrarCombos(); // sin parámetro, muestra todos

    const row = document.querySelector(".row");
    row.innerHTML = ""; // limpiar contenido previo

    data.combos.forEach((dato) => {
      // Columna
      const col = document.createElement("div");
      col.className = "col";
      col.style.marginTop="100px"
      // Card
      const card = document.createElement("div");
      card.className = "card";
      card.style.width = "90%";
      card.style.margin = "0 auto";
      card.style.height = "100%";
       card.style.marginTop="40px"
     

      // Imagen
      const img = document.createElement("img");
      img.className = "card-img-top img-fluid rounded-top";
      img.src = dato.imagen;
      img.alt = dato.Combo;
      img.style.height = "250px";
      img.style.objectFit = "contain";

      // Card body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      // Título
      const titulo = document.createElement("h5");
      titulo.className = "card-title";
      titulo.textContent = dato.Combo;

      // Contenido
      const tipo = document.createElement("strong");
      tipo.className = "contenido";
      tipo.textContent = dato.Contenido;

      // Precio
      const precio = document.createElement("p");
      precio.className = "card-text";
    precio.textContent = `S/ ${dato.precio}`;
      precio.style.color = "red";
      precio.style.fontWeight = "bold";

      // Armar estructura
      cardBody.appendChild(titulo);
      cardBody.appendChild(tipo);
      cardBody.appendChild(precio);

      card.appendChild(img);
      card.appendChild(cardBody);

      col.appendChild(card);
      row.appendChild(col);
    });
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));

function mostrarCombos(tipo) {
  const row = document.querySelector(".row");

  // Si ya hay cards, haz fade out
  const cards = row.querySelectorAll(".card");
  cards.forEach(card => card.classList.add("fade-out"));

  // Después de la transición (0.5s), cambia el contenido
  setTimeout(() => {
    row.innerHTML = "";

    const filtrados = tipo
      ? todosLosCombos.filter(combo => combo.tipo === tipo)
      : todosLosCombos;

    filtrados.forEach(dato => {
      const col = document.createElement("div");
      col.className = "col";
      col.style.marginTop = "100px";

      const card = document.createElement("div");
      card.className = "card fade-out";  // Empieza invisible
      card.style.width = "90%";
      card.style.margin = "0 auto";
      card.style.height = "100%";
      card.style.marginTop = "40px";

      const img = document.createElement("img");
      img.className = "card-img-top img-fluid rounded-top";
      img.src = dato.imagen;
      img.alt = dato.Combo;
      img.style.height = "250px";
      img.style.objectFit = "contain";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const titulo = document.createElement("h4");
      titulo.className = "card-title";
      titulo.textContent = dato.Combo;
      titulo.style.fontWeight="Bold"

      const contenido = document.createElement("strong");
      contenido.className = "contenido";
      contenido.textContent = dato.Contenido;

      const precio = document.createElement("p");
      precio.className = "card-text";
      precio.textContent = `S/ ${dato.precio}`;
      precio.style.color = "red";
      precio.style.fontWeight = "bold";

      cardBody.appendChild(titulo);
      cardBody.appendChild(contenido);
      cardBody.appendChild(precio);

      card.appendChild(img);
      card.appendChild(cardBody);

      col.appendChild(card);
      row.appendChild(col);

      // Forzar reflow para activar transición
      void card.offsetWidth;
      // Quitar clase fade-out para que aparezca con transición
      card.classList.remove("fade-out");
    });
  }, 300);
}


// Eventos para los botones
document.getElementById("Vodka").addEventListener("click", e => {
  e.preventDefault();
  mostrarCombos("vodka");
  // Cierra el navbar en responsive
const navbarCollapse = document.querySelector(".navbar-collapse");
if (navbarCollapse.classList.contains("show")) {
  new bootstrap.Collapse(navbarCollapse).hide();
}

});
document.getElementById("Ron").addEventListener("click", e => {
  e.preventDefault();
  mostrarCombos("Ron");
  // Cierra el navbar en responsive
const navbarCollapse = document.querySelector(".navbar-collapse");
if (navbarCollapse.classList.contains("show")) {
  new bootstrap.Collapse(navbarCollapse).hide();
}

});
document.getElementById("Pisco").addEventListener("click", e => {
  e.preventDefault();
  mostrarCombos("Pisco");
  // Cierra el navbar en responsive
const navbarCollapse = document.querySelector(".navbar-collapse");
if (navbarCollapse.classList.contains("show")) {
  new bootstrap.Collapse(navbarCollapse).hide();
}

});
document.getElementById("Whiskey").addEventListener("click", e => {
  e.preventDefault();
  mostrarCombos("whiskey");
  // Cierra el navbar en responsive
const navbarCollapse = document.querySelector(".navbar-collapse");
if (navbarCollapse.classList.contains("show")) {
  new bootstrap.Collapse(navbarCollapse).hide();
}
});

document.getElementById("Jagger").addEventListener("click", e => {
  e.preventDefault();
  mostrarCombos("jagger");
  // Cierra el navbar en responsive
const navbarCollapse = document.querySelector(".navbar-collapse");
if (navbarCollapse.classList.contains("show")) {
  new bootstrap.Collapse(navbarCollapse).hide();
}
});
document.getElementById("Anisado").addEventListener("click", e => {
  e.preventDefault();
  mostrarCombos("Anisado");
  // Cierra el navbar en responsive
const navbarCollapse = document.querySelector(".navbar-collapse");
if (navbarCollapse.classList.contains("show")) {
  new bootstrap.Collapse(navbarCollapse).hide();
}
});


