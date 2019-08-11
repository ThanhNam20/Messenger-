import view from "../view.js";
import login from "./login.js"

const registerScreen = `
<div class="container">
        <div class="row">
            <article class="card-body mx-auto" style="max-width: 500px;">
                <h4 class="card-title mt-3 text-center">Create Account</h4>
                <p class="text-center">Get started with your free account</p>
                <p>
                    <a href="" class="btn btn-block btn-outline-danger"> <i class="fab fa-google-plus-g"></i>   Login with Google+ </a>
                    <a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i>   Login with Facebook</a>
                </p>
                <hr>
                
                <form>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Full name" type="text">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Email address" type="email">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                        </div>
                        <select class="custom-select" style="max-width: 120px;">
                            <option selected="">+084</option>
                        </select>
                        <input name="" class="form-control" placeholder="Phone number" type="text">
                    </div> <!-- form-group// -->    
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div>
                        <input class="form-control" placeholder="Create password" type="password">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div>
                        <input class="form-control" placeholder="Repeat password" type="password">
                    </div> <!-- form-group// -->
                    <div class="form-group">
                        <button type="button" class="btn btn-primary btn-block"> Create Account </button>
                    </div> <!-- form-group// -->
                    <p class="text-center">Have an account? <a href="" id="loginPage" >Sign in</a> </p>
                </form>
            </article>
        </div>
    </div>`;
function onload() {
  const loginPage = document.getElementById("loginPage");
  loginPage.addEventListener("click", function() {
    view.loadScreen(register.view, register.onload);
  });
}
const register = {
  view: registerScreen,
  onload: onload
};
export default register;
