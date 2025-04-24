import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnItemShareListComponent } from './pur-grn-item-share-list.component';

describe('PurGrnItemShareListComponent', () => {
  let component: PurGrnItemShareListComponent;
  let fixture: ComponentFixture<PurGrnItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
