//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  guard(number);
  var step= 0;
  while(number>1){
    number = (even(number))?Divide(number):Multiply(number);
    ++step;
  }
  return step;
};
function guard(number){
  if(number == 0)
   throw new Error('Only positive numbers are allowed')
   if(number<0)
   throw new Error('Only positive numbers are allowed');
}

function even(number) { 
  return number%2 == 0 ;
}

function Multiply(number) {
return  1+(number*3);
}

function Divide(number) {
  return number /= 2;
} 

