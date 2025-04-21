import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrItemListComponent } from './pur-pr-item-list.component';

describe('PurPrItemListComponent', () => {
  let component: PurPrItemListComponent;
  let fixture: ComponentFixture<PurPrItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
