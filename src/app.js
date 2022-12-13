/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronom = ["Mi", "Tu", "Nuestro"];
  let adj = ["pequeño", "gran", "fabuloso"];
  let sust = ["árbol", "viaje", "perro"];
  let ext = [".com", ".net", ".es"];

  let generadorDeDominios = function(pronom, adj, sust, ext) {
    for (let a = 0; a < pronom.length; a++) {
      for (let b = 0; b < adj.length; b++) {
        for (let c = 0; c < sust.length; c++) {
          for (let d = 0; d < ext.length; d++) {
            console.log(pronom[a] + adj[b] + sus[c] + ext[d]);
            //console.log(`${pronom[a]}${adj[b]} ${sust[c]}${ext[d]}`)
          }
        }
      }
    }
  };
};
