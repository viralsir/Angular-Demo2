import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmfForm } from './tmf-form';

describe('TmfForm', () => {
  let component: TmfForm;
  let fixture: ComponentFixture<TmfForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TmfForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TmfForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
