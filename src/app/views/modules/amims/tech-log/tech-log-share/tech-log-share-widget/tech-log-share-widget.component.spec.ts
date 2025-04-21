import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogShareWidgetComponent } from './tech-log-share-widget.component';

describe('TechLogShareWidgetComponent', () => {
  let component: TechLogShareWidgetComponent;
  let fixture: ComponentFixture<TechLogShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
