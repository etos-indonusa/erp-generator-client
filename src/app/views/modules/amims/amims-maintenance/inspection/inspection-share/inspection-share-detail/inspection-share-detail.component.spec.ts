import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionShareDetailComponent } from './inspection-share-detail.component';

describe('InspectionShareDetailComponent', () => {
  let component: InspectionShareDetailComponent;
  let fixture: ComponentFixture<InspectionShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
