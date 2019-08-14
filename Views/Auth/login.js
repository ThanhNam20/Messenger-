import view from "../view.js";
import register from "./register.js";
import forgetpassword from "./forgetpassword.js";
import { googleLogin } from "../../Controllers/googleLogin.js";
import { facebookLogin } from "../../Controllers/facebookLogin.js";

const loginScreen = `<div class="container">
        <div class="row">
            <article class="card-body mx-auto" style="max-width: 500px;">
                <h3 class="card-title mt-3 text-center">Sign in</h3>
                    <a href="" id="google" class="btn btn-block btn-outline-danger"> <i class="fab fa-google-plus-g"></i> Sign in with Google+
                    </a>
                    <a href="" id="facebook" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i> Sign in with
                        Facebook</a>
                </p>
                <hr>
                <form>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Email address" type="email">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div>
                        <input class="form-control" placeholder="Password" type="password">
                    </div> <!-- form-group// -->
                    <div class="form-group">
                        <button type="submit" class="btn btn-success btn-block"> Sign in </button>
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
    const google = document.getElementById("google");
    const facebook = document.getElementById("facebook");

    resetPassPage.addEventListener("click", function() {
      view.loadScreen(forgetpassword.view, forgetpassword.onload);
    });
    newAccountPage.addEventListener("click", function() {
        view.loadScreen(register); 
    });
    
    facebook.addEventListener("click", event => {
      event.preventDefault();
      facebookLogin();
    });

    google.addEventListener("click", event => {
      event.preventDefault();
      googleLogin();
    });
}
const login = {
    content: loginScreen,
    onload: onload
}
export default login;
