import h from "./builder-function.js";
import { changePasswordSubmit } from "./api.js"; 
// will be caled in pp.js with a window.onload event listener
function navBarChange(){

    const token = window.localStorage.getItem("access_token");
    if (token){
        //get rid of sign up button on navbar
        let navBar = document.querySelector(".nav-links");
        let signUpButton = document.querySelector("#sign-up");
        const changePasswordLink = h("a", {href: "#change-password"}, `Change Password`)
        const changePasswordEL = h("li", {id: "change-password"}, changePasswordLink);
        signUpButton.replaceWith(changePasswordEL);
        changePasswordEL.addEventListener('click', changePasswordForm);

        //replace login with logout 
        const logoutLink = h("a", {href: "#log-out"}, `Log Out`)
        const logoutEl = h("li", {id: "log-out"}, logoutLink);
        const loginEl = document.querySelector("#log-in");
        loginEl.replaceWith(logoutEl);
        logoutEl.addEventListener("click", () => {
            window.localStorage.removeItem("access_token");
            location.reload();
        })
    }
}

function changePasswordForm() {
    const url = "https://week7-chjm.herokuapp.com/password"
    const main = document.querySelector("main");
    main.innerHTML = "";
    const oldPasswordLabel = h("label", { htmlFor: "oldPassword" }, "Old Password: ");
    const oldPassword = h("input", {
        type: "password",
        id: "oldPassword",
        name: "old-password",
        required: "true",
    });
    const newPasswordLabel = h("label", { htmlFor: "newPassword" }, "New Password");
    const newPassword = h("input", {
        type: "password",
        id: "newPassword",
        name: "new-password",
        required: "true",
    });
    const submitButton = h("input", { type: "submit" });
    const form = h("form", {onsubmit: (event) => {
        event.preventDefault();
        const oldPasswordValue = event.target.elements.oldPassword.value;
        const newPasswordValue = event.target.elements.newPassword.value;
        changePasswordSubmit(oldPasswordValue, newPasswordValue, url);
    }
    }, oldPasswordLabel, oldPassword, newPasswordLabel, newPassword, submitButton);
    main.append(form);
}



export default navBarChange;