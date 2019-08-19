'use strict'

export class Matrix {
  constructor(rows) {
    this._rows  = rows.split('\n').map(r => r.split(" ")).map(r => r.map(Number)) ;
    this._columns = this.retreiveColumns(this._rows);
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns
  }
  
  retreiveColumns (rows){
    let c =  new Array(); 
     for(var i = 0; i<rows[0].length; i++){
       c.push(rows.map(r => r[i]))
     }
     return c;
   }
}
