import { Service } from '@angular/core';

@Service()
export class GreetingService {

   private msg:string="wel come to the world of angular";

   public greetingmsg(){

     return this.msg;

   }

}
