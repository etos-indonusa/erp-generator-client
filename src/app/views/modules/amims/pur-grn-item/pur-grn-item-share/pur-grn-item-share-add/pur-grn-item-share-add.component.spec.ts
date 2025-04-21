import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnItemShareAddComponent } from './pur-grn-item-share-add.component';

describe('PurGrnItemShareAddComponent', () => {
  let component: PurGrnItemShareAddComponent;
  let fixture: ComponentFixture<PurGrnItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
