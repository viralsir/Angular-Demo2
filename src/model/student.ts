export class Student {

   _rollno:number=0;
   _name:string="";
   _maths:number=0;
   _science:number=0;


  setstudent(name:string,rollno:number=0,maths:number=0,science:number=0){
    this._rollno = rollno;
    this._name = name;
    this._maths = maths;
    this._science = science;
  }



}
