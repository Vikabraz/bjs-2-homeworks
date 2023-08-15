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

// class Triangle{
//     constructor(sideF, sideSec, sideTh){
//     this.sideF = sideF;
//     this.sideSec = sideSec;
//     this.sideTh = sideTh;
//     this._perimeter = null;
//     this._area = null;
//     }


    
//     get perimeter() {
//         this._perimeter = (this.sideF + this.sideSec + this.sideTh);
//             return this._perimeter;
//     }

//     get area () {
//       this._area = +(Math.sqrt(this._perimeter / 2 * (this._perimeter / 2 - this.sideF) * (this._perimeter / 2 - this.sideSec) * (this._perimeter / 2 - this.sideTh))).toFixed(3);
//       return this._area;
//     }
    
// }

// if (((sideF + sideSec) < sideTh) || ((sideF + sideTh) < sideSec) || ((sideSec + sideTh) < sideF)) {
//     throw new Error('Треугольник с такими сторонами не существует');
// }



//  function getTriangle(sideF, sideSec, sideTh);





