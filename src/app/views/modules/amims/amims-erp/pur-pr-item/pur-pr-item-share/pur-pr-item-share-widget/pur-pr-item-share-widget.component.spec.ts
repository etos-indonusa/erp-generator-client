import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrItemShareWidgetComponent } from './pur-pr-item-share-widget.component';

describe('PurPrItemShareWidgetComponent', () => {
  let component: PurPrItemShareWidgetComponent;
  let fixture: ComponentFixture<PurPrItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
