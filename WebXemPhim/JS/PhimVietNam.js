import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimLeHTML = generateHTML(allMovies, (item) => item.country.includes("Phim Việt Nam"));
document.getElementById("card").innerHTML = phimLeHTML