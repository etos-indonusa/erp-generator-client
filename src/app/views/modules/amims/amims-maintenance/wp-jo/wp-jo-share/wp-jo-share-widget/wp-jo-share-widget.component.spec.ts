import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpJoShareWidgetComponent } from './wp-jo-share-widget.component';

describe('WpJoShareWidgetComponent', () => {
  let component: WpJoShareWidgetComponent;
  let fixture: ComponentFixture<WpJoShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpJoShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpJoShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
