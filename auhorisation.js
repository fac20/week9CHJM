import {addHarvestFunction} from "./app.js"

export const authorisationFunction = () => {
    const token = window.localStorage.getItem("access_token");
    const addHarvestButton = document.querySelector(".add-harvest");
    if (!token) {
      addHarvestButton.disabled = true;
    } else {
      addHarvestButton.disabled = false;
      addHarvestButton.addEventListener("click", addHarvestFunction);
    }
  }