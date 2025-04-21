import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaRpdShareWidgetComponent } from './qa-rpd-share-widget.component';

describe('QaRpdShareWidgetComponent', () => {
  let component: QaRpdShareWidgetComponent;
  let fixture: ComponentFixture<QaRpdShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QaRpdShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaRpdShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
