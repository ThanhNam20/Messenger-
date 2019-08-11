import login from "./login.js";
import view from "../view.js";

const resetPassScreen = `<div class="container">
        <div class="row">
                <article class="card-body mx-auto" style="max-width: 500px;">
                    <h3 class="card-title mt-3 text-center">Reset password</h3>
                    <hr>
                    <form>
                        <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Email address" type="email">
                    </div> <!-- form-group// -->
                    <div class="form-group">
                        <button type="button" class="btn btn-primary btn-block"> Reset password </button>
                    </div> <!-- form-group// -->
                    <p class="text-left"><a href="" id="backToLoginPage">Back ></a> </p>
                    </form>
            </article>
        </div>
    </div>`;
    function onload() {
      const backToLoginPage = document.getElementById("backToLoginPage");
      backToLoginPage.addEventListener("click", function() {
        view.loadScreen(login);
      });
    }
    const forgetpassword = {
      content: resetPassScreen,
      onload: onload
    };
    export default forgetpassword;



