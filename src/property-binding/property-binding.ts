import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {

  msg:string="This is a property binding component content";
  style="color:yellow;background-color:red;padding:5px;"

  f1:boolean = true;
  f2:boolean = false;

}
