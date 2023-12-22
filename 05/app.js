class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.grades = {};
  }

  addGrade(sub, raiting) {
    if (!this.grades[sub]) {
      this.grades[sub] = [];
    }
    this.grades[sub].push(raiting);
  }

  getAverageGrade(sub) {
    let subject = this.grades[sub];
    let arrMulti = [];
    let arrFlat = [];

    if (subject) {
      console.log(`Srednia ${sub} to ${avgFunc(subject)}`);
    } else {
      for (let item in this.grades) {
        arrMulti.push(this.grades[item]);
      }
      arrFlat = arrMulti.flat(1);
      // console.log(arrFlat);
      console.log(`Srednia wszystkich przedmiotów to: ${avgFunc(arrFlat)}`);
    }
  }
}

const student = new User("Jan", "Kowalski");
student.addGrade("math", 6);
student.addGrade("math", 3);
student.addGrade("history", 5);
student.addGrade("history", 3);
student.addGrade("math", 5);
student.addGrade("math", 4);

student.getAverageGrade("math");
student.getAverageGrade("history");
student.getAverageGrade();

console.log(student);

function avgFunc(arr) {
  const len = arr.length;
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const result = sum / len;
  return result;
}
