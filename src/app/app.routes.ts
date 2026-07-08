import { Routes } from '@angular/router';
import {Component1} from '../component1/component1';
import {Component2} from '../component2/component2';
import {ModelDrivenForm} from '../model-driven-form/model-driven-form';
import {StudentEntry} from '../student-entry/student-entry';
import {StudentView} from '../student-view/student-view';
import {PostComponent} from '../post-component/post-component';
import {Author} from '../author';
import {AuthorComponent} from '../author-component/author-component';

export const routes: Routes = [
  { path: 'c1',component:Component1 },
  { path: 'c2',component:Component2 },
  { path:'mdf',component:ModelDrivenForm },
  { path:"entry",component:StudentEntry},
  { path:"view",component:StudentView},
  { path:"posts",component:PostComponent},
  {path:'authors',component:AuthorComponent},
];
