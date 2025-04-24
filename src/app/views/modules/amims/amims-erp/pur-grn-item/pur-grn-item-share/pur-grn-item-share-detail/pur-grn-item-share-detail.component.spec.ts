import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnItemShareDetailComponent } from './pur-grn-item-share-detail.component';

describe('PurGrnItemShareDetailComponent', () => {
  let component: PurGrnItemShareDetailComponent;
  let fixture: ComponentFixture<PurGrnItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
