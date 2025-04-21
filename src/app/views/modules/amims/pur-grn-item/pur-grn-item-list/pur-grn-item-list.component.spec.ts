import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnItemListComponent } from './pur-grn-item-list.component';

describe('PurGrnItemListComponent', () => {
  let component: PurGrnItemListComponent;
  let fixture: ComponentFixture<PurGrnItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
