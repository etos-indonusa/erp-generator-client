import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailAcShareWidgetComponent } from './td-detail-ac-share-widget.component';

describe('TdDetailAcShareWidgetComponent', () => {
  let component: TdDetailAcShareWidgetComponent;
  let fixture: ComponentFixture<TdDetailAcShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdDetailAcShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDetailAcShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
