import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrItemShareListComponent } from './pur-pr-item-share-list.component';

describe('PurPrItemShareListComponent', () => {
  let component: PurPrItemShareListComponent;
  let fixture: ComponentFixture<PurPrItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
