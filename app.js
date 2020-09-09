// 1. import modules
import h from "./builder-function.js";

// 2. function creates forms (signin/login)
const createForm = (parameter, routes) => {
    main.innerHTML = "";
    const url = "http://urbanharvest.io"+routes;

    const title = h('h2', {}, parameter);
    // elements inside the form
    const emailLabel = h('label', {for: 'email'});
    const email = h('input', {type: email, id: email, name: email, required}, "");
    const passwordLabel = h('label', { for: 'password'});
    const password = h('input', {type: 'password', id: 'email', name: 'email', required}, "");
    const submitButton = h('input', {type: 'submit'}, parameter)
    // create form with above elements as children

    const form = h('form', {action: url, method: "post"}, emailLabel, email, passwordLabel, password, submitButton);

    main.append(title, form);

    return main
}


