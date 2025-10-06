import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpShareWidgetComponent } from './wp-share-widget.component';

describe('WpShareWidgetComponent', () => {
  let component: WpShareWidgetComponent;
  let fixture: ComponentFixture<WpShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
