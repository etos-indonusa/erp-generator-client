import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionShareListComponent } from './inspection-share-list.component';

describe('InspectionShareListComponent', () => {
  let component: InspectionShareListComponent;
  let fixture: ComponentFixture<InspectionShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
