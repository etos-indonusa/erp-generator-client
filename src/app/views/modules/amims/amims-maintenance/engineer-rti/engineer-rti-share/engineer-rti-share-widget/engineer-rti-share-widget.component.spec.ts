import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiShareWidgetComponent } from './engineer-rti-share-widget.component';

describe('EngineerRtiShareWidgetComponent', () => {
  let component: EngineerRtiShareWidgetComponent;
  let fixture: ComponentFixture<EngineerRtiShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
