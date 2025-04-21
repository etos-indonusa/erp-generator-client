import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineShareWidgetComponent } from './tech-log-engine-share-widget.component';

describe('TechLogEngineShareWidgetComponent', () => {
  let component: TechLogEngineShareWidgetComponent;
  let fixture: ComponentFixture<TechLogEngineShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
