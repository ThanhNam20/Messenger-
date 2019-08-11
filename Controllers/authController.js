import newValidator from '../utils/validator.js'
function newAuthController() {
    const controller = {};
    controller.register = (registerPayLoad)=> {
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
            rule:"isMatching",
            value: registerPayLoad.password
          }
        ]
        };
        const validator = newValidator();
        const errors=  validator.validate(registerPayLoad,rules);
        if(errors !== null){
            console.log(errors)  
        }else{
            elert("Dang ki thanh cong")
        }
    }

    return controller;
}
export default newAuthController
