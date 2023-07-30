function getArrayParams(...args) {
  args.sort((a,b) =>  a - b);

  let sum = args.reduce(function(res, item) {
   return  res + item
  },0);
  
  let avg = Number((sum / args.length).toFixed(2));
  let min;
  let max;

  for (let i = 0; i < args.length; i++){ 
    min = args[0];
    max = args[i=args.length - 1];
  }

    return {
      min,
      max,
      avg,
    };
  }

 

function summElementsWorker(...arr) { 
return arr.reduce((res, item) => res + item, 0);
}

function differenceMaxMinWorker(...arr) {
  if(!arr.length){
    return 0;
  }
  return  Math.max(...arr) - Math.min(...arr);
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

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(!arr.length){
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++ ){
    if (arr[i] %2 === 0){
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  
  return sumEvenElement / countEvenElement;

}

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const maxFunctionResult = func(...arrOfArr[i]);
    if (maxFunctionResult > maxWorkerResult) {
      maxWorkerResult = maxFunctionResult;
    }
  }
  return maxWorkerResult;
}
