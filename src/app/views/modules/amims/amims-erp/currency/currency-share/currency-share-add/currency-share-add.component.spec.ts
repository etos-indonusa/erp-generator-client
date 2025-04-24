import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyShareAddComponent } from './currency-share-add.component';

describe('CurrencyShareAddComponent', () => {
  let component: CurrencyShareAddComponent;
  let fixture: ComponentFixture<CurrencyShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
