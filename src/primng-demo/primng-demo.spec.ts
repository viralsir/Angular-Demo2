import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimngDemo } from './primng-demo';

describe('PrimngDemo', () => {
  let component: PrimngDemo;
  let fixture: ComponentFixture<PrimngDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimngDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimngDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
