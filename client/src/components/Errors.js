import React from 'react';
import { withAlert } from "react-alert";


 export const displayErrors = (errors) => {
    debugger
    if(Object.keys(errors).length > 0){
        Object.keys(errors).map((key, index) => {
                let errorText = `${key}: ${errors[key]}`
                return this.props.alert.error(errorText);
          })
      }
} 
