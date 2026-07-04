import { Service } from '@angular/core';
import {Student} from '../model/student';

@Service()
export class StudentService {

   students: Student[]=[];  // [new student(),new student() ,new student()]

  public addStudent(newStudent: Student){
    this.students.push(newStudent);
  }

  public viewStudent(){
     return this.students;
  }


}
