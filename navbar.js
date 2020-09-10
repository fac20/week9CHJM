import h from "./builder-function.js";
// will be caled in pp.js with a window.onload event listener
function navBarChange(event){
    const token = window.localStorage.getItem("access-token");
    if (token){
        //get rid of sign up button on navbar
        let navBar = document.querySelector(".nav-links");
        let signUpButton = document.querySelector(".sign-up-button");
        navBar.removeChild(signUpButton);

        //replace login with logout 
        const logoutEl = h("a", {href: "#log-out"}, `LOGOUT`);
        const loginEl = document.querySelector("#log-in");
        loginEl.replaceWith(logoutEl);
    }
}


export default navBarChange;