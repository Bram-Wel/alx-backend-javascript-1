interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 20, location: 'Nairobi' };
const student2: Student = { firstName: 'Jane', lastName: 'Doe', age: 21, location: 'Mombasa' };

const studentsList: Student[] = [student1, student2];

console.log(studentsList);
