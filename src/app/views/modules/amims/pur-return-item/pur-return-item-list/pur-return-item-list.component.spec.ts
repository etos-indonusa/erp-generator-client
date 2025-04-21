import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnItemListComponent } from './pur-return-item-list.component';

describe('PurReturnItemListComponent', () => {
  let component: PurReturnItemListComponent;
  let fixture: ComponentFixture<PurReturnItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
