import view from "../view.js";
import login from "./login.js";
import newAuthcontroller from "../../Controllers/authController.js";
import { responseCode } from "../../Controllers/response.js";
import messages from "../status.js";

const registerScreen = `
<div class="container">
<h4 class="card-title mt-3 text-center">Create Account</h4>
                <p class="text-center">Get started with your free account</p>
        <div class="row">
            <article class=" ahihi card-body mx-auto" style="max-width: 450px;">
                
                <p>
                    <a href="" class="btn btn-block btn-outline-danger"> <i class="fab fa-google-plus-g"></i>   Login with Google+ </a>
                    <a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i>   Login with Facebook</a>
                </p>
                <hr>
                
                <form id="js-formRegister">
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                        </div>
                        <input class="form-control" id="name" placeholder="Full name" type="text">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" class="form-control" id="email" placeholder="Email address" type="email">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                        </div>
                        <select class="custom-select" style="max-width: 120px;">
                            <option selected="">+084</option>
                        </select>
                        <input name="" class="form-control" id="number" placeholder="Phone number" type="text">
                    </div> <!-- form-group// -->    
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div>
                        <input class="form-control" id="password" placeholder="Create password" type="password">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-lock"></i> </span>
                        </div>
                        <input class="form-control" id="repassword" placeholder="Repeat password" type="password">
                    </div> <!-- form-group// -->
                    <div class="form-group">
                        <button type="button" id="js-btnRegister" class="btn btn-outline-primary btn-block"> Create Account </button>
                    </div> <!-- form-group// -->
                    <p class="text-center">Have an account? <a href="#" id="loginPage" >Sign in</a> </p>
                </form>
            </article>
        </div>
    </div>`;
function onload() {
  const btnRegister = document.getElementById("js-btnRegister");
  const formRegister = document.getElementById("js-formRegister");
  const loginPage = document.getElementById("loginPage");
  loginPage.addEventListener("click", function() {
    view.loadScreen(login);
  });
  btnRegister.addEventListener("click", async function(event){
    event.preventDefault();
    const registerPayLoad = {
      name: formRegister.name.value,
      email: formRegister.email.value,
      number: formRegister.number.value,
      password: formRegister.password.value,
      repassword: formRegister.repassword.value
    };
    clearErrors();
    const authController = newAuthcontroller();
    const response = await authController.register(registerPayLoad);
    if ((response.type === 'failure')) {
      switch (response.code) {
        case responseCode.auth.register.invalid_input:
          //invalid input
          showErrors(response.data);
          break;
      }
    }else {
      switch (response.code) {
        case responseCode.auth.register.success:
          //success input
            showSuccessMessage();
            setTimeout(() => {
              view.loadScreen(login); 
            }, 1500);
      }
    }
  });
}

function showSuccessMessage() {
  Swal.fire("Success!", "Please check your email to verify", "success");
}

function showErrors(errors) {
  const fields = Object.keys(errors);
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    const input = document.getElementById(field);
    input.classList.add("is-invalid");
    for (var j = 0; j < errors[field].length; j++) {
      const error = errors[field][j];
      const errorFeedback = document.createElement("div");
      errorFeedback.setAttribute("class", "invalid-feedback");
      errorFeedback.innerHTML = messages.error[field][error.message];

      const inputParent = input.parentElement;
      inputParent.insertBefore(errorFeedback, input.nextSibling);
    }
  }
}

function clearErrors() {
  const errorFeedbacks = document.getElementsByClassName("invalid-feedback");
  while (errorFeedbacks.length > 0) {
    errorFeedbacks[0].remove();
  }
}

const register = {
  content: registerScreen,
  onload: onload
};
export default register;
