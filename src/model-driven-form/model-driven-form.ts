import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {

  productForm: FormGroup=new FormGroup({
    id:new FormControl('',[Validators.required,Validators.min(0)]),
    name: new FormControl('',[Validators.required]),
    qty: new FormControl('',[Validators.required,Validators.min(0)]),
    rate: new FormControl('',[Validators.min(0)])
  });


  productlist:any=[]

  protected save()
  {
      //console.log(this.productForm.value);
      this.productlist.push(this.productForm.value);
  }



}
