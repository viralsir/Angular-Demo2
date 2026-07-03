import {Component, EventEmitter, input, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {

  // @Input() name: string="";
  // @Input() price: number = 0;

   name  = input<string>();
   price = input<number>();

   studentname:string="Vishal";

   @Output() addToCart = new EventEmitter<string>(); //

   onAdd(){
     this.addToCart.emit(this.studentname);
   }


}
