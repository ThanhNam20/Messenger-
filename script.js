import login from "./Views/Auth/login.js";
import view from "./Views/view.js";
import register from "./Views/Auth/register.js"
import home from "./Views/Auth/homePage.js"
//import register from "./Views/Auth/register.js";
//import forgetpassword from "./Views/Auth/forgetpassword.js";
window.onload = function () {
    view.loadScreen(home);
}
