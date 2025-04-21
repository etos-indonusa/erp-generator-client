import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDiscrepanciesShareWidgetComponent } from './tech-discrepancies-share-widget.component';

describe('TechDiscrepanciesShareWidgetComponent', () => {
  let component: TechDiscrepanciesShareWidgetComponent;
  let fixture: ComponentFixture<TechDiscrepanciesShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDiscrepanciesShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDiscrepanciesShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
