export function newSuccessResponse(code, data) {
    return {
        type: 'success',
        code: code,
        data: data
    }
}

 export function newFailureResponse(code, data){
    return {
      type: 'failure',
      code: code,
      data: data
    };
}

export const responseCode = {
    auth: {
        register :{
            invalid_input: 'auth/register/invalid_input',
            success: 'auth/register/success'
        }
    }
}