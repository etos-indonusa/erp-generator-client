import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdRefShareWidgetComponent } from './td-ref-share-widget.component';

describe('TdRefShareWidgetComponent', () => {
  let component: TdRefShareWidgetComponent;
  let fixture: ComponentFixture<TdRefShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdRefShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdRefShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
