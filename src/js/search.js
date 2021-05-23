import {DOMSelectors } from "./DOM"

const listen = function (){
    DOMSelectors.searchForm.addEventListener("submit", function(e){

        e.preventDefault(); //stop the form from refreshing the page
        const searchParams = DOMSelectors.searchArea.value; //whatever the user wants to search 
        console.log(searchParams)
        const searchQuery  = async function () {
            console.log("async")
          try {
            const response = await fetch(
              ` https://api.jikan.moe/v3/search/anime?q=${searchParams}&order_by=members&sort=desc&page=1/search/anime?q=Boku&page=1&genre=12&genre_exclude=0`
            );
            const data = await response.json();
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
                      </div>`
              );
            });
        
          } catch (error) {
            alert("Something went wrong!");
          }
        };
        searchQuery()
    })
};

listen();

 // data.results.forEach((anime) => {
            //   DOMSelectors.info.insertAdjacentElement(
            //     "beforeend",
            //     `<div id="info">
            //     <img
            //     src=${anime.img_url}"
            //    alt="anime-img"
            //    class="anime-img"
            // />
            // <div class="caption-box">
            // <p class="caption">Title: ${anime.title}</p>
            // <p class="caption">Score: ${anime.score}</p>
            // <p class="caption">Episodes: ${anime.episodes}</p>
            // <p class="caption">Type: ${anime.type}</p>
            // <p class="caption">Rated: ${anime.rated}</p>
            //   </div>
            // </div>
            //   <div class="synopsis-box">
            //       <h1 class="synopsis-header">Synopsis</h1>
            //       <p class="synopsis">${anime.synopsis}</p>
            //   </div> `
            //   );
            // });
    