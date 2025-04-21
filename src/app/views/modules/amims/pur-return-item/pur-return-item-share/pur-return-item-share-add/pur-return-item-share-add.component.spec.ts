import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnItemShareAddComponent } from './pur-return-item-share-add.component';

describe('PurReturnItemShareAddComponent', () => {
  let component: PurReturnItemShareAddComponent;
  let fixture: ComponentFixture<PurReturnItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
