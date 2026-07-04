import { Component,inject } from '@angular/core';
import {StudentService} from '../services/student-service';

@Component({
  selector: 'app-student-view',
  imports: [],
  templateUrl: './student-view.html',
  styleUrl: './student-view.css',
})
export class StudentView {

  student_service:StudentService=inject(StudentService);



}
