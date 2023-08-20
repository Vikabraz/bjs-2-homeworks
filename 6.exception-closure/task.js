function parseCount(num) {
    if (Number.parseFloat(num)){
        return Number.parseFloat(num)
    }
    else{
        throw new Error ('Невалидное значение');
    }

}

function validateCount(num){

try{
    let result = parseCount(num);
    if (result) {
        return result;
}
} catch(Error) {
    return Error;
}
}

// задача 2

class Triangle{
    constructor(sideF, sideSec, sideTh){
        
        if (sideF + sideSec <= sideTh || sideF + sideTh <= sideSec || sideSec + sideTh <= sideF) {
    throw new Error('Треугольник с такими сторонами не существует');
}

    this.sideF = sideF;
    this.sideSec = sideSec;
    this.sideTh = sideTh;
  
    }


    
    get perimeter() {
        const perimeter = this.sideF + this.sideSec + this.sideTh;
            return perimeter;
    }

    get area () {
      const area = +(Math.sqrt (this.perimeter / 2 * (this.perimeter / 2 - this.sideF) * (this.perimeter / 2 - this.sideSec) * (this.perimeter / 2 - this.sideTh))).toFixed(3);
      return area;
    }
    
}




 function getTriangle(sideF, sideSec, sideTh){
    try{
    const triangle1 = new Triangle(sideF, sideSec, sideTh);
    return triangle1;
    } catch(error){

        return {
            get perimeter(){
             return 'Ошибка! Треугольник не существует';
        },
            get area(){
              return  'Ошибка! Треугольник не существует';
            } 
        };    
    }
    }
    
    


   

 




