function newValidator() {
  const validator = {};

  validator.isEmail = (value, rule) => {
      if(Boolean(rule.value)){
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(String(value).toLowerCase());
      }
      return true;
  };
  validator.notEmpty = (value,rule)=> {
      if(Boolean(rule.value)){
          return String(value).length !== 0;
      }
      return true;
  }
  validator.minLength = (value,rule)=> {
      return String(value)>= rule.value;
  }

  validator.isMatching = (value,rule)=> {
      return String(value) === rule.value
  }

  validator.validate = (object, rules) => {
    // validate here...
    const keys = Object.keys(rules);
    const errors = [];
    for (var key of keys) {
      const value = object[key];
      for (const rule of rules[key]) {
          const ruleName = rule.rule;
          console.log(ruleName)
          const isPassed = validator[ruleName](value ,rule); 
          if(isPassed === false){
              errors.push(new Error(key + ' is violated ' + ruleName))
          }
      }
    }
    return errors
  };
  return validator;
}
export default newValidator;
