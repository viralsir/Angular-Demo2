import { ComponentFixture, TestBed } from '@angular/core/testing';

import GreetingComponent1 from './greeting-component1';

describe('GreetingComponent1', () => {
  let component: GreetingComponent1;
  let fixture: ComponentFixture<GreetingComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingComponent1],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingComponent1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
