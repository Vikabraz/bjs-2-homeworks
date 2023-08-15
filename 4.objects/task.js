function Student(name, gender, age, marks) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const student1 = new Student('Маша', 'ж', 22);
const student2 = new Student('Женя', 'ж', 23);
const student3 = new Student('Саша', 'м', 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {

    if(this.marks){
        this.marks.push(...marks);
    }
  
}

Student.prototype.getAverage = function () {
  if(!this.marks || !this.marks.length){
    return 0;
  } else{
 return this.marks.reduce((acc, item) => (acc += item), 0) / this.marks.length;
}
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

