import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyShareListComponent } from './currency-share-list.component';

describe('CurrencyShareListComponent', () => {
  let component: CurrencyShareListComponent;
  let fixture: ComponentFixture<CurrencyShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
