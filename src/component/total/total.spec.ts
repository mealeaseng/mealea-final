import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Total } from './total';

describe('Total', () => {
  let component: Total;
  let fixture: ComponentFixture<Total>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Total]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Total);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
