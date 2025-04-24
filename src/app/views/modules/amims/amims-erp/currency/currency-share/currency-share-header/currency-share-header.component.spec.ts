import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyShareHeaderComponent } from './currency-share-header.component';

describe('CurrencyShareHeaderComponent', () => {
  let component: CurrencyShareHeaderComponent;
  let fixture: ComponentFixture<CurrencyShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
