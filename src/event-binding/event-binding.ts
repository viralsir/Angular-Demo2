import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {

  greetmsg:string=""
  total:number=0;
  error:string=""

  greetmessage(username:HTMLInputElement)  // username=name
  {
    this.greetmsg="hello welcome "+username.value;
    username.value="";
    username.style.backgroundColor= "green";
  }

   sum(no1:HTMLInputElement,no2:HTMLInputElement)
   {
     if(parseInt(no1.value)<0)
     {
        this.error="No1 is Nagetive ";
     }
     else
     {
       this.total=parseInt(no1.value) + parseInt(no2.value);
       this.error="";
     }


   }

}
