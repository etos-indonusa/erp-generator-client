import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnItemShareHeaderComponent } from './pur-return-item-share-header.component';

describe('PurReturnItemShareHeaderComponent', () => {
  let component: PurReturnItemShareHeaderComponent;
  let fixture: ComponentFixture<PurReturnItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
