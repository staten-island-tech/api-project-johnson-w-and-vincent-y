import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";
console.log(key);

const query = async function () {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1"
    );
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.log("Wrong");
  }
};
query();
