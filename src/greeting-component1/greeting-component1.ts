import {Component, inject} from '@angular/core';
import {GreetingService} from '../services/greeting-service';


@Component({
  selector: 'app-greeting-component1',
  imports: [],
  templateUrl: './greeting-component1.html',
  styleUrl: './greeting-component1.css',
})
export class GreetingComponent1 {

  gservice: GreetingService=inject(GreetingService)




}


