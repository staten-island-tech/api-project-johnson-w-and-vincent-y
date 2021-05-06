import { DOMSelectors } from "./DOM";

const key = "YOURKEYHERE";
console.log(key);

const query = async function () {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1"
    );
    const data = await response.json();
    data.results.forEach((anime) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `
        <div class="movie-card">
          <div class="movie-card-front">
            <img
              src="${anime.image_url}"
              alt=""
              class="poster"
            />
          </div>
          `
      );
    });
    console.log(data.results);
  } catch (error) {
    alert("Something went wrong!");
  }
};
query();
