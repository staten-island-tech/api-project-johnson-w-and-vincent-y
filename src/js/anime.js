import { DOMSelectors } from "./DOM";

console.log(DOMSelectors.info);

const query2 = async function () {
  try {
    const response2 = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=&order_by=score&sort=desc&page=1`
    );
    const data2 = await response2.json();

    data.results.forEach((anime) => {
      DOMSelectors.info.insertAdjacentElement(
        "beforeend",
        `<div id="info">
        <img
        src=${anime.img_url}"
       alt="anime-img"
       class="anime-img"
    />
    <div class="caption-box">
    <p class="caption">Title: ${anime.title}</p>
    <p class="caption">Score: ${anime.score}</p>
    <p class="caption">Episodes: ${anime.episodes}</p>
    <p class="caption">Type: ${anime.type}</p>
    <p class="caption">Rated: ${anime.rated}</p>
      </div>
    </div>
      <div class="synopsis-box">
          <h1 class="synopsis-header">Synopsis</h1>
          <p class="synopsis">${anime.synopsis}</p>
      </div> `
      );
    });
    console.log(data2.results);
  } catch (error) {
    alert("Something went wrong!");
  }
};
query2();
