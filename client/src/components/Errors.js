
 export const displayErrors = (errors, alertFunc) => {
    if(errors !== undefined){
        Object.keys(errors).map((key, index) => {
                let errorText = `${key}: ${errors[key]}`
                return alertFunc.error(errorText);
          })
      }
} 
