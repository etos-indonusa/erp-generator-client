import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyShareDetailComponent } from './currency-share-detail.component';

describe('CurrencyShareDetailComponent', () => {
  let component: CurrencyShareDetailComponent;
  let fixture: ComponentFixture<CurrencyShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
