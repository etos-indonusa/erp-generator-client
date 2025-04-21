import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinShareWidgetComponent } from './bin-share-widget.component';

describe('BinShareWidgetComponent', () => {
  let component: BinShareWidgetComponent;
  let fixture: ComponentFixture<BinShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BinShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
