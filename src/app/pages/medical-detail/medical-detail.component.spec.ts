import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDetailComponent } from './medical-detail.component';

describe('MedicalDetailComponent', () => {
  let component: MedicalDetailComponent;
  let fixture: ComponentFixture<MedicalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
