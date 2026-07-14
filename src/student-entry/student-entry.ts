import { Component ,inject } from '@angular/core';
import {StudentService} from '../services/student-service';
import {Student} from '../model/student';

@Component({
  selector: 'app-student-entry',
  imports: [],
  templateUrl: './student-entry.html',
  styleUrl: './student-entry.css',
})
export class StudentEntry {

  student_service:StudentService=inject(StudentService);
  student:Student=new Student();
  msg:string="";

  protected add(rollno: HTMLInputElement, name: HTMLInputElement, maths: HTMLInputElement, science: HTMLInputElement)
  {

    this.student.setstudent(name.value,parseInt(rollno.value),parseInt(maths.value),parseInt(science.value));
    this.student_service.addStudent(this.student);
    console.log(this.student);
    this.msg="record successfully saved.";

  }
}
