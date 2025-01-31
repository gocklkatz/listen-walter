import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SammlungenComponent } from './sammlungen.component';

describe('SammlungenComponent', () => {
  let component: SammlungenComponent;
  let fixture: ComponentFixture<SammlungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SammlungenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SammlungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
