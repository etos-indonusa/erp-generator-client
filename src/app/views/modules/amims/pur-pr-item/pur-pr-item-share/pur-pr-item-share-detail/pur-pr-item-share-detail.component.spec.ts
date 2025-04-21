import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrItemShareDetailComponent } from './pur-pr-item-share-detail.component';

describe('PurPrItemShareDetailComponent', () => {
  let component: PurPrItemShareDetailComponent;
  let fixture: ComponentFixture<PurPrItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
