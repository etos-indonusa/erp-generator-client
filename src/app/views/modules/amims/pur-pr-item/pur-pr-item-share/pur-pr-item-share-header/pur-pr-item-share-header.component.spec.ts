import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrItemShareHeaderComponent } from './pur-pr-item-share-header.component';

describe('PurPrItemShareHeaderComponent', () => {
  let component: PurPrItemShareHeaderComponent;
  let fixture: ComponentFixture<PurPrItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
