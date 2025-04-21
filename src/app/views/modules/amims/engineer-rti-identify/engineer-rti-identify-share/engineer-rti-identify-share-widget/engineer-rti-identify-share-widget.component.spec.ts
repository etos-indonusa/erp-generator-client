import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiIdentifyShareWidgetComponent } from './engineer-rti-identify-share-widget.component';

describe('EngineerRtiIdentifyShareWidgetComponent', () => {
  let component: EngineerRtiIdentifyShareWidgetComponent;
  let fixture: ComponentFixture<EngineerRtiIdentifyShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiIdentifyShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiIdentifyShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
