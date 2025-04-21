import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionShareAddComponent } from './inspection-share-add.component';

describe('InspectionShareAddComponent', () => {
  let component: InspectionShareAddComponent;
  let fixture: ComponentFixture<InspectionShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
