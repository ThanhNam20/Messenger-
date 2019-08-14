import view from "../view.js";
import register from "./register.js";
import forgetpassword from "./forgetpassword.js";
import newAuthcontroller from "../../Controllers/authController.js";

const loginScreen = `<div class="container">
        <div class="row">
            <article class="card-body mx-auto" style="max-width: 500px;">
                <h3 class="card-title mt-3 text-center">Sign in</h3>
                    <a href="" class="btn btn-block btn-outline-danger"> <i class="fab fa-google-plus-g"></i> Sign in with Google+
                    </a>
                    <a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i> Sign in with
                        Facebook</a>
                </p>
                <hr>
                <form>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                        </div>
                        <input id="email" name="" class="form-control" placeholder="Email address" type="email">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div>
                        <input id="password" class="form-control" placeholder="Password" type="password">
                    </div> <!-- form-group// -->
                    <div class="form-group">
                        <button type="submit" id="login" class="btn btn-success btn-block"> Sign in </button>
                        <hr>
                        <p class="text-left" ><a href="#" id="resetPassPage">Forgot password?</a></p>
                        <button id="newAccountPage" type="button" class="btn btn-primary btn-block"> Create New Account </button>
                    </div> <!-- form-group// -->
                </form>
            </article>
        </div>
    </div>`;

function onload() {
    const resetPassPage = document.getElementById("resetPassPage");
    const newAccountPage = document.getElementById("newAccountPage");
    const formLogin = document.querySelector("form");
    const login = document.getElementById("login");

    login.addEventListener('click', event=> {
        event.preventDefault();
        const loginPayLoad = {
            email: formLogin.email.value,
            password: formLogin.password.value
        }
        const authController = newAuthcontroller();
        authController.login(loginPayLoad);
    })

    resetPassPage.addEventListener("click", function() {
      view.loadScreen(forgetpassword.view, forgetpassword.onload);
    });
    newAccountPage.addEventListener("click", function() {
        view.loadScreen(register); 
    });
    
}
const login = {
    content: loginScreen,
    onload: onload
}
export default login;
