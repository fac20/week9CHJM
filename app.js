// 1. import modules
import h from "./builder-function.js";
import navBarChange from "./navbar.js";

const app = document.querySelector("#app");
const login = document.getElementById("log-in");
const signUp = document.getElementById("sign-up");
const seeAll = document.querySelector(".see-all");

// 2. function creates forms (signin/login)
const createForm = (parameter, routes) => {
  app.innerHTML = "";
  const url = "https://week7-chjm.herokuapp.com/" + routes;

  // dogs dogs-rest.herokuapp.com/v1/

  const title = h("h2", {}, parameter);
  // elements inside the form
  const emailLabel = h("label", { for: "email" }, "Email");
  const email = h("input", {
    type: "email",
    id: "email-input",
    name: "email",
    required: "",
  });
  const passwordLabel = h("label", { for: "password" }, "Password");
  const password = h("input", {
    type: "password",
    id: "password",
    name: "email",
    required: "",
  });
  const submitButton = h("input", { type: "submit" }, "required");
  // create form with above elements as children

  const form = h(
    "form",
    { action: url, method: "post" },
    emailLabel,
    email,
    passwordLabel,
    password,
    submitButton
  );

  app.append(title, form);

  return app;
};

login.addEventListener("click", () => createForm("login", "login"));
signUp.addEventListener("click", () => createForm("signup", "signup"));

//3. Create form to post new food
const createPostHarvestForm = () => {
  app.innerHTML = "";

  const url = "https://week7-chjm.herokuapp.com/harvest";

  const harvestTitle = h("h2", {}, "Add a new crop");
  // elements inside the form

  const foodTypeLabel = h("label", { for: "foodType" });
  const foodType = h(
    "input",
    { type: "text", id: "foodType", name: "foodType", required },
    ""
  );

  const tasteLabel = h("label", { for: "taste" });
  const taste = h(
    "input",
    { type: "text", id: "taste", name: "taste", required },
    ""
  );

  const harvestTimeLabel = h("label", { for: "harvestTime" });
  const harvestTime = h(
    "input",
    { type: "text", id: "harvestTime", name: "harvestTime", required },
    ""
  );

  const locationLabel = h("label", { for: "location" });
  const location = h(
    "input",
    { type: "text", id: "location", name: "location", required },
    ""
  );

  const dateLabel = h("label", { for: "date" });
  const date = h(
    "input",
    { type: "text", id: "date", name: "date", required },
    ""
  );

  const submitHarvestButton = h("input", { type: "submit" }, "Add");
  // create form with above elements as children

  const harvestForm = h(
    "form",
    { action: url, method: "post" },
    foodTypeLabel,
    foodType,
    tasteLabel,
    taste,
    harvestTimeLabel,
    harvestTime,
    locationLabel,
    location,
    dateLabel,
    date,
    submitHarvestButton
  );

  app.append(harvestTitle, harvestForm);

  return app;
};

//On button click, getAllHarvest is called
//Will go to model and pull out all entries
//Return a call to displayAllHarvest which will place them on the page

function getAllHarvest(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonObj) => {
      return displayAllHarvest(jsonObj);
    });
}

// 4. function creates elements
const displayAllHarvest = (jsonObject) => {
  const searchButton = h("input", { type: "button" }, "search");

  for (let data in jsonObject) {
    const post = h("div", { className: "harvestPost" }, "");
    const fruit = h("p", {}, `Fruit: ${jsonObject[data.food_type]}`);
    const taste = h("p", {}, `Taste: ${jsonObject[data.taste]}`);
    const harvestTime = h(
      "p",
      {},
      `Harvest Time: ${jsonObject[data.harvest_time]}`
    );
    const location = h("p", {}, `Harvest Time: ${jsonObject[data.location]}`);
    const date = h("p", {}, `Harvest Time: ${jsonObject[data.date]}`);

    const deleteButton = h(
      "input",
      { type: "button", className: "delete-button" },
      "delete"
    );
    const updateButton = h(
      "input",
      { type: "button", className: "update-button" },
      "edit"
    );

    post.append(
      fruit,
      taste,
      harvestTime,
      location,
      date,
      deleteButton,
      updateButton
    );
  }

  return post;
};

// nav bar update on logged-in status
window.onload = navBarChange;



// display all harvests on click
seeAll.addEventListener("click", () =>
  getAllHarvest("https://week7-chjm.herokuapp.com/harvest")
);
