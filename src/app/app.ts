import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Component1} from '../component1/component1';
import {Component2} from '../component2/component2';
import {PropertyBinding} from '../property-binding/property-binding';
import {EventBinding} from '../event-binding/event-binding';
import {TwowayBinding} from '../twoway-binding/twoway-binding';
import {ControlStructure} from '../control-structure/control-structure';
import {ParentComponent} from '../parent-component/parent-component';
import {GreetingComponent1} from '../greeting-component1/greeting-component1';
import {StudentEntry} from '../student-entry/student-entry';
import {StudentView} from '../student-view/student-view';
import {TmfForm} from '../tmf-form/tmf-form';
import {TemplateDrivenForm} from '../template-driven-form/template-driven-form';
import {ModelDrivenForm} from '../model-driven-form/model-driven-form';

@Component({
  selector: 'main-root',
  imports: [RouterOutlet, Component1, Component2, PropertyBinding, EventBinding, TwowayBinding, ControlStructure, ParentComponent, GreetingComponent1, StudentEntry, StudentView, TmfForm, TemplateDrivenForm, ModelDrivenForm, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{

  protected readonly title = signal('Angular-Demo2');



}
