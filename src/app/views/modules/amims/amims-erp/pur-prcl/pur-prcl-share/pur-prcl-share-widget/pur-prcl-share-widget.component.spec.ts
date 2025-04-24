import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrclShareWidgetComponent } from './pur-prcl-share-widget.component';

describe('PurPrclShareWidgetComponent', () => {
  let component: PurPrclShareWidgetComponent;
  let fixture: ComponentFixture<PurPrclShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrclShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrclShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
