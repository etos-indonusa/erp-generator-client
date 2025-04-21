import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrItemShareAddComponent } from './pur-pr-item-share-add.component';

describe('PurPrItemShareAddComponent', () => {
  let component: PurPrItemShareAddComponent;
  let fixture: ComponentFixture<PurPrItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
