import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-control-structure',
  imports: [
    FormsModule
  ],
  templateUrl: './control-structure.html',
  styleUrl: './control-structure.css',
})
export class ControlStructure {

  rollno:number=0;
  name:string="";
  maths:number=0;
  science:number=0;

  student_array=[
    {"rollno":1,"name":"Amit","maths":34,"science":66},
    {"rollno":1,"name":"Viren","maths":84,"science":66}
  ]

title=["RollNo","Name","Maths","Science","Status","grade"]

  protected readonly parseInt = parseInt;

  protected save()
  {
    let student={}

    // @ts-ignore
    student["rollno"]=this.rollno;
    // @ts-ignore
    student["name"]=this.name;
    // @ts-ignore
    student["maths"]=this.maths;
    // @ts-ignore
    student["science"]=this.science;

    // @ts-ignore
    this.student_array.push(student);

  }
}
