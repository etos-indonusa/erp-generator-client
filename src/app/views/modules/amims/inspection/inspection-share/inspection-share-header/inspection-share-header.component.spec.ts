import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionShareHeaderComponent } from './inspection-share-header.component';

describe('InspectionShareHeaderComponent', () => {
  let component: InspectionShareHeaderComponent;
  let fixture: ComponentFixture<InspectionShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
