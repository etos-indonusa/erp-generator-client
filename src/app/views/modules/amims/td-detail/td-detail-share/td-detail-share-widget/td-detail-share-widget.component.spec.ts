import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailShareWidgetComponent } from './td-detail-share-widget.component';

describe('TdDetailShareWidgetComponent', () => {
  let component: TdDetailShareWidgetComponent;
  let fixture: ComponentFixture<TdDetailShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
