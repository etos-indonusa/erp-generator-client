import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineCheckShareWidgetComponent } from './tech-log-engine-check-share-widget.component';

describe('TechLogEngineCheckShareWidgetComponent', () => {
  let component: TechLogEngineCheckShareWidgetComponent;
  let fixture: ComponentFixture<TechLogEngineCheckShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineCheckShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineCheckShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
