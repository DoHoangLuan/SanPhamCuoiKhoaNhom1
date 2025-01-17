import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/FunctoinCard.js";

$(document).ready(function () {
    // Lấy tham số truyền vào URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Lấy giá trị của tham số "category"
    const categoryParam = urlParams.get("Phim");

    // Nếu tham số "category" có giá trị là "phimbo"
    if (categoryParam === "PhimLe") {
        $("#category-text").text("PHIM LẺ");
        $(".title-home span").text("Phim Lẻ");

        const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Lẻ"), 0, 25);
        document.getElementById("card").innerHTML = phimLeHTML;
    } else if (categoryParam === "PhimBo") {
        $("#category-text").text("PHIM BỘ");
        $(".title-home span").text("Phim Bộ");

        const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Bộ"), 0, 25);
        document.getElementById("card").innerHTML = phimLeHTML;
    } else if (categoryParam === "PhimSapChieu") {
        $("#category-text").text("PHIM SẮP CHIẾU");
        $(".title-home span").text("Phim Sắp Chiếu");

        const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Sắp Chiếu"), 0, 25);
        document.getElementById("card").innerHTML = phimLeHTML;
    } else if (categoryParam === "PhimThinhHanh") {
        $("#category-text").text("PHIM THỊNH HÀNH");
        $(".title-home span").text("Phim Thịnh Hành");

        const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Thịnh Hành"), 0, 25);
        document.getElementById("card").innerHTML = phimLeHTML;
    } else {
        $("#category-text").text("PHIM CHIẾU RẠP");
        $(".title-home span").text("Phim Chiếu Rạp");

        const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Chiếu Rạp"), 0, 25);
        document.getElementById("card").innerHTML = phimLeHTML;
    }
});
