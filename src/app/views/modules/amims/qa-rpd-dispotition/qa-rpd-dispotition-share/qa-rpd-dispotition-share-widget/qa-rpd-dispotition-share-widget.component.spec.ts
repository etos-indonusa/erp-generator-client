import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdDispotitionShareWidgetComponent } from './qa-rpd-dispotition-share-widget.component';

describe('QaRpdDispotitionShareWidgetComponent', () => {
  let component: QaRpdDispotitionShareWidgetComponent;
  let fixture: ComponentFixture<QaRpdDispotitionShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdDispotitionShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdDispotitionShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
