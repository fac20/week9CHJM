// 1. import modules
import h from "./builder-function.js";

// 2. function creates forms (signin/login)
const createForm = (parameter, routes) => {
  main.innerHTML = "";
  const url = "http://urbanharvest.io" + routes;

  const title = h("h2", {}, parameter);
  // elements inside the form
  const emailLabel = h("label", { for: "email" });
  const email = h(
    "input",
    { type: email, id: email, name: email, required },
    ""
  );
  const passwordLabel = h("label", { for: "password" });
  const password = h(
    "input",
    { type: "password", id: "email", name: "email", required },
    ""
  );
  const submitButton = h("input", { type: "submit" }, parameter);
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

  return main;
};

//3. Create form to post new food
const createPostHarvestForm = () => {
  main.innerHTML = "";

  const url = "http://urbanharvest.io/harvest";

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

  main.append(harvestTitle, harvestForm);

  return main;
};

// xxx. function creates posts
// const createPost = (jsonObject) {

//     return post
// }

// function displayHarvest(url) {

// fetch(url).then(
//     response => {
//     return    response.json();
//     }
// )then(
//     (jsonObj) => {
//         return createPost(jsonObj)
//     }
// )

// }
