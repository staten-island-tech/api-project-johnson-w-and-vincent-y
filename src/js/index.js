import { DOMSelectors } from "./DOM";

const key = "YOURKEYHERE";
console.log(key);

const query = async function () {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v3/search/anime?q=&order_by=score&sort=desc&page=1"
    );
    const data = await response.json();
    data.results.forEach((anime) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `  <div class="anime-card">

            <img
              src="${anime.image_url}"
             alt=""
             class="poster"
          />

      <h1 class="anime-header">${anime.title}</h1>
     </div>`
      );
    });
    console.log(data.results);
  } catch (error) {
    alert("Something went wrong!");
  }
};
query();
