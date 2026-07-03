import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Component1} from '../component1/component1';
import {Component2} from '../component2/component2';
import {PropertyBinding} from '../property-binding/property-binding';
import {EventBinding} from '../event-binding/event-binding';
import {TwowayBinding} from '../twoway-binding/twoway-binding';
import {ControlStructure} from '../control-structure/control-structure';
import {ParentComponent} from '../parent-component/parent-component';

@Component({
  selector: 'main-root',
  imports: [RouterOutlet, Component1, Component2, PropertyBinding, EventBinding, TwowayBinding, ControlStructure, ParentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{

  protected readonly title = signal('Angular-Demo2');



}
