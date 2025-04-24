import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionShareWidgetComponent } from './inspection-share-widget.component';

describe('InspectionShareWidgetComponent', () => {
  let component: InspectionShareWidgetComponent;
  let fixture: ComponentFixture<InspectionShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
