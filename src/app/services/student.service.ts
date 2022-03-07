import { Injectable } from '@angular/core';
import { Student } from '../Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [ 
    {
      Id: 1,
      Name: 'Arslan',
      Age: 25,
      City: 'Faisalabad'
    },
    {
      Id: 2,
      Name: 'Usman',
      Age: 30,
      City: 'Jaranwala'
    }
  ];
  onGet(){
    return this.students;
  }
  onGetSingle(id: number){
    return this.students.find(x => x.Id == id);
  }
  onAdd(student: Student){
    this.students.push(student);
  }
  onUpdate(studentz: Student){
    let oldStd = this.students.find(x => x.Id == studentz.Id)!;
    oldStd.Name = studentz.Name;
    oldStd.Age = studentz.Age;
    oldStd.City = studentz.City;
  }
  onDelete(id: number){
    let studentx = this.students.find(x => x.Id == id)!;
    let index = this.students.indexOf(studentx,0);
    this.students.splice(index,1);
  }

  constructor() { }

}
