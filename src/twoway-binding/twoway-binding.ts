import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-twoway-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './twoway-binding.html',
  styleUrl: './twoway-binding.css',
})
export class TwowayBinding {

  name:string="enter";


}
