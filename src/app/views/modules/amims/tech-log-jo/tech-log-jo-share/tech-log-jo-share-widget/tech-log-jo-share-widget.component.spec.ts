import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogJoShareWidgetComponent } from './tech-log-jo-share-widget.component';

describe('TechLogJoShareWidgetComponent', () => {
  let component: TechLogJoShareWidgetComponent;
  let fixture: ComponentFixture<TechLogJoShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogJoShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogJoShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
