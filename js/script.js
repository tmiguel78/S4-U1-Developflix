import peliculas from './peliculas.js'

/* CONSIDERACIONES:
- Tarjeta pelicula consta de caratula + titulo
- Capturar en variables los títulos y las carátulas
- meter en cada seccion las peliculas de su genero.
- posibles metodos de arrays: filter()
- meterlas en el HTML. appendChild
*/


// Variable para arrays generos de peliculas

const pelis_accion = peliculas.filter(accion => accion.genre_ids.includes(28));
const pelis_thriller = peliculas.filter(thriller => thriller.genre_ids.includes(53));
const pelis_aventura = peliculas.filter(aventura => aventura.genre_ids.includes(12));

// Variables para sacar el titulo. Me devuelve array.

const titulo_accion = pelis_accion.map(titulo => titulo.title);
const titulo_thriller = pelis_thriller.map(titulo => titulo.title);
const titulo_aventura = pelis_aventura.map(titulo => titulo.title);

// Variables para sacar solo las caratulas. Me devuelve un array

const caratula_accion = pelis_accion.map(car => car.poster_path);
const caratula_thriller = pelis_thriller.map(car => car.poster_path);
const caratula_aventura = pelis_aventura.map(car => car.poster_path);

// Variables para sacar los links de las caratulas en formato string

const links_pelis_accion = caratula_accion.map(peli => 'https://image.tmdb.org/t/p/w500' + peli)
console.log(links_pelis_accion);
const links_pelis_thriller = caratula_thriller.map(peli => 'https://image.tmdb.org/t/p/w500' + peli)
const links_pelis_aventura = caratula_aventura.map(peli => 'https://image.tmdb.org/t/p/w500' + peli)


// Metemos los títulos en la web
// Crea una variable que recorre cada elemento y su índice
const html_accion = links_pelis_accion.map((url, i) => {
  return `<div class = "tarjeta_pelicula">
  <img src="${url}"><p>${titulo_accion[i]}</p>
  </div>`;
});
const html_thriller = links_pelis_thriller.map((url, i) => {
  return `<div class = "tarjeta_pelicula">
  <img src="${url}"><p>${titulo_thriller[i]}</p>
  </div>`;
});
const html_aventura = links_pelis_aventura.map((url, i) => {
  return `<div class = "tarjeta_pelicula">
  <img src="${url}"><p>${titulo_aventura[i]}</p>
  </div>`;
});

// variable para unirlo para quitar la coma que sale arriba
const html_final_accion = html_accion.join('');
const html_final_thriller = html_thriller.join('');
const html_final_aventura = html_aventura.join('');

document.getElementById('genero-28').innerHTML = html_final_accion;
document.getElementById('genero-53').innerHTML = html_final_thriller;
document.getElementById('genero-12').innerHTML = html_final_aventura;


