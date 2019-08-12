import newValidator from "../utils/validator.js";
import { isEmptyObject } from "../utils/object.js";
import {
  newSuccessResponse,
  newFailureResponse,
  responseCode
} from "./response.js";

function newAuthController() {
  const controller = {};
  controller.register = registerPayLoad => {
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
          value: true
        }
      ]
    };
   
    const validator = newValidator();
    const errors = validator.validate(registerPayLoad, rules);
    if (!isEmptyObject(errors)) {
      //Something went wrong
      return newFailureResponse(responseCode.auth.register.invalid_input,errors);
    }
  };

  return controller;
}
export default newAuthController;
