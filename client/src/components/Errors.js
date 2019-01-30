
 export const displayErrors = (errors, alertFunc) => {
    if(Object.keys(errors).length > 0){
        Object.keys(errors).map((key, index) => {
                let errorText = `${key}: ${errors[key]}`
                return alertFunc.error(errorText);
          })
      }
} 
