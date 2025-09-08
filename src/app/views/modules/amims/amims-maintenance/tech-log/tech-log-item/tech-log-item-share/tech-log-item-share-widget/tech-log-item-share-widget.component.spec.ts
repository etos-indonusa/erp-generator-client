import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogItemShareWidgetComponent } from './tech-log-item-share-widget.component';

describe('TechLogItemShareWidgetComponent', () => {
  let component: TechLogItemShareWidgetComponent;
  let fixture: ComponentFixture<TechLogItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
