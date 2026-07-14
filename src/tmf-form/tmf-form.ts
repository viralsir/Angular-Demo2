import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-tmf-form',
  imports: [
    FormsModule
  ],
  templateUrl: './tmf-form.html',
  styleUrl: './tmf-form.css',
})
export class TmfForm {
  protected save(loginform: NgForm)
  {
      console.log(loginform.value)
  }
}
