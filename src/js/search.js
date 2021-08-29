import { DOMSelectors } from "./DOM";

let page = 1;

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); //stop the form from refreshing the page
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value; //whatever the user wants to search
    console.log(searchParams);
    if (searchParams === "") {
      DOMSelectors.loadBtn2.style.display = "none";
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="error">No Anime Name Inputted</div>`
      );
    }

    const searchQuery = async function () {
      try {
        const response = await fetch(
          ` https://api.jikan.moe/v3/search/anime?q=${searchParams}&page=${page}`
        );
        const data = await response.json();
        console.log(data.status);
        const nothing = function () {
          if (data.status === 404 && searchParams != "") {
            DOMSelectors.loadBtn2.style.display = "none";
            DOMSelectors.grid.insertAdjacentHTML(
              "beforeend",
              `<div class="error">Anime Not Found</div>`
            );
          }
        };
        nothing();

        data.results.forEach((anime) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `  <<div class="anime-card">
                <div class="anime-card-front">
                       <img
                             src="${anime.image_url}"
                            alt=""
                            class="poster"
                         />
                     <h1 class="anime-header">${anime.title}</h1>
                    </div>
                    <div class="anime-card-back">
                      <p class="caption">Title: ${anime.title}</p>
                      <p class="caption">Score: ${anime.score}</p>
                      <p class="caption">Episodes: ${anime.episodes}</p>
                      <p class="caption">Type: ${anime.type}</p>
                      <p class="caption">Rated: ${anime.rated}</p>
                        </div>
                      </div>
                      `
          );
        });
        DOMSelectors.loadBtn2.style.display = "block";
      } catch (error) {
        console.log("Something went wrong!");
      }
    };
    searchQuery();
    function loadData() {
      if (page < 359) {
        page++;
        searchQuery();
      }
    }
    DOMSelectors.loadBtn2.addEventListener("click", loadData);
    console.log(page);
  });
};

listen();
