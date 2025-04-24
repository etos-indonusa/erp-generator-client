import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyShareWidgetComponent } from './currency-share-widget.component';

describe('CurrencyShareWidgetComponent', () => {
  let component: CurrencyShareWidgetComponent;
  let fixture: ComponentFixture<CurrencyShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
