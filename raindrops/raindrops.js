'use strict'
import { stringLiteral } from "@babel/types";

export const convert = (number) => {
 var r= '';
      
  if (number %3 == 0)
      r+= 'Pling'
  if (number %5 == 0)
      r+= 'Plang'
  if (number %7 == 0)
      r+= 'Plong'
  if (r == '')
    r= `${number}`
  
  return r;
};
