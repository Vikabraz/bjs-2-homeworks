"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discrim = a ** 2 - 4 * a * c;

 
  if (discrim > 0){
    let radicalFirst = (-b + Math.sqrt(discrim))/(2*a);
    let radicalSecond = (-b - Math.sqrt(discrim))/(2*a);
    arr.push(radicalFirst , radicalSecond);
     }

 else if (discrim = 0){
  let radical = (-b/(2*a));
   arr.push(radical);
  }  

  else {
    arr = [];
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {


  let P = countMonths / 100 / 12;
  let S = amount - contribution;

 let monthPay = S * (P + (P / (((1 + P) ** countMonths) - 1)));
 let total = Number((monthPay * countMonths).toFixed(2)) ;

return total;
}