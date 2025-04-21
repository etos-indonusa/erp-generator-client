import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnItemShareHeaderComponent } from './pur-grn-item-share-header.component';

describe('PurGrnItemShareHeaderComponent', () => {
  let component: PurGrnItemShareHeaderComponent;
  let fixture: ComponentFixture<PurGrnItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
