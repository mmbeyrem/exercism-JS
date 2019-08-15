'use strict'
let _rows = undefined;
let  _columns = undefined;


const retreiveColumns = function (rows){
  let c =  new Array(); 
   for(var i = 0; i<rows[0].length; i++){
     c.push(rows.map(r => r[i]))
   }
   return c;
 }
export class Matrix {
  
  constructor(rows) {
    _rows  = rows.split('\n').map(r => r.split(" ")).map(r => r.map(i => new Number(i))) ;
    _columns = retreiveColumns(_rows);
  }

  get rows() {
    return _rows;
  }

  get columns() {
    return _columns
  }
}
