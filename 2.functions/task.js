function getArrayParams(...arr) {
  args.sort((a,b) =>  a - b);

  let min = args[0];
  let max = args[i=args.length - 1];
  let sum = sumAll (...args);
  let avg = Number((sum / args.length).toFixed(2));
  
  function sumAll (...args){
    let sum = 0;
     for (let i = 0; i < args.length; i++){
      sum += args[i];
    }
    return sum;
    }
 
    return {
      min,
      max,
      avg,
    };
  }

 

function summElementsWorker(...arr) {
  let result = arr.reduce((res, item) => res + item);
return result;
}

function differenceMaxMinWorker(...arr) {
  let result = Math.max(...arr) - Math.min(...arr);
  return result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++ ){
    if (arr[i] %2 === 0){
      sumEvenElement += arr[i];
    }
    else {
      sumOddElement += arr[i];
    }
  }
  let result = sumEvenElement - sumOddElement;
  return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++ ){
    if (arr[i] %2 === 0){
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  let result = sumEvenElement / countEvenElement;
  return result;

}

function makeWork (arrOfArr, func) {

  let maxWorkerResult
}
