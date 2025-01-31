import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SammlungComponent } from './sammlung.component';

describe('SammlungComponent', () => {
  let component: SammlungComponent;
  let fixture: ComponentFixture<SammlungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SammlungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SammlungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
