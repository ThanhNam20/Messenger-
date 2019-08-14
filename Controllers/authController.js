import newValidator from "../utils/validator.js";
import { isEmptyObject } from "../utils/object.js";
import {
  newSuccessResponse,
  newFailureResponse,
  responseCode
} from "./response.js";

function newAuthController() {
  const controller = {};
  //register controller
  controller.register = async registerPayLoad => {
    // Validate data
    const rules = {
      name: [
        {
          rule: "notEmpty",
          value: true
        }
      ],
      email: [
        {
          rule: "isEmail",
          value: true
        }
      ],
      number: [
        {
          rule: "minLength",
          value: 10
        }
      ],
      password: [
        {
          rule: "minLength",
          value: 8
        }
      ],
      repassword: [
        {
          rule: "isMatching",
          value: 8
        }
      ]
    };

    const validator = newValidator();
    const errors = validator.validate(registerPayLoad, rules);
    if (!isEmptyObject(errors)) {
      //Something went wrong
      return newFailureResponse(
        responseCode.auth.register.invalid_input,
        errors
      );
    }
    // Register with Firebase
    await firebase
      .auth()
      .createUserWithEmailAndPassword(
        registerPayLoad.email,
        registerPayLoad.password
      );
    firebase.auth().currentUser.updateProfile({
      displayName: `${registerPayLoad.name} ${registerPayLoad.number}`
    });
    firebase.auth().currentUser.sendEmailVerification();
    return newSuccessResponse(
      responseCode.auth.register.success,
      firebase.auth().currentUser
    );
  };

  //login controller
  controller.login = async loginPayLoad => {
    //firebase Login
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(loginPayLoad.email, loginPayLoad.password)
      .catch(function(error) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Something went wrong! Please check your email and password again!",
        });
      });
  };

  return controller;
}
export default newAuthController;
