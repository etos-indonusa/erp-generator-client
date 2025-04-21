import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnItemShareDetailComponent } from './pur-return-item-share-detail.component';

describe('PurReturnItemShareDetailComponent', () => {
  let component: PurReturnItemShareDetailComponent;
  let fixture: ComponentFixture<PurReturnItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
