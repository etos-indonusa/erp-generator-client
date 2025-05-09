import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteShareWidgetComponent } from './site-share-widget.component';

describe('SiteShareWidgetComponent', () => {
  let component: SiteShareWidgetComponent;
  let fixture: ComponentFixture<SiteShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
