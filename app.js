// 1. import modules
import h from "./builder-function.js";
import navBarChange from "./navbar.js";

const app = document.querySelector("#app");
const login = document.getElementById("log-in");
const signUp = document.getElementById("sign-up");
const seeAll = document.querySelector(".see-all");
const main = document.querySelector("main");
const homeButton = document.getElementById("home");

// 2. function creates forms (signin/login)
const createForm = (parameter, routes) => {
  main.innerHTML = "";
  const url = "https://week7-chjm.herokuapp.com/" + routes;


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
    
  main.append(title, form);

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
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonObj) => {
      return displayAllHarvest(jsonObj);
    });
}

// 4. function creates elements
const displayAllHarvest = (jsonObject) => {
  console.log(jsonObject)
  const searchButton = h("input", { type: "button" }, "search");
    //let post = "";

  jsonObject.forEach( data => {
    
    const post = h("div", { className: "harvestPost" }, "");
    const fruit = h("p", {}, `Fruit: ${data.food_type}`);
    const taste = h("p", {}, `Taste: ${data.taste}`);
    const harvestTime = h(
      "p",
      {},
      `Harvest Time: ${data.harvest_time}`
    );
    const location = h("p", {}, `Location: ${data.location}`);
    const date = h("p", {}, `Date: ${data.date}`);
  
    const deleteButton = h(
      "button",
      { type: "button", className: "delete-button" },
      "delete"
    );
    const updateButton = h(
      "button",
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

    app.append(post);

  })
};

// nav bar update on logged-in status
window.onload = navBarChange;



// display all harvests on click
seeAll.addEventListener("click", () =>
  getAllHarvest("https://week7-chjm.herokuapp.com/harvest")
);


const createHome = () => {
  const homeHTML = `  
  <section class="image">
      <embed src="apple.svg" width="250em" height="250em" />
  
      <span class="logo"><p>Urban Harvest</p></span>
  </section>
  <section class="hero-text">
      <h1 class="h1-title">Welcome to Urban Harvest</h1>
      <p class="h1-subtitle">
        Urban Harvest is a celebration of the overlooked bounty grown in and
        around our cities. It's a database to help foragers find produce in
        their neighborhoods.
      </p>
      <button class="add-harvest">Add a discovery</button>
      <button class="search-harvest">Search the field</button>
      <button class="see-all">See all</button>
  </section>
  
  <div id="app">
      <!---- stuff goes here! ---->
  </div>
  <script src="./app.js" type="module"></script>`
  main.innerHTML = "";
  main.innerHTML = homeHTML;
}

homeButton.onclick = createHome;
