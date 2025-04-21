import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnItemShareListComponent } from './pur-return-item-share-list.component';

describe('PurReturnItemShareListComponent', () => {
  let component: PurReturnItemShareListComponent;
  let fixture: ComponentFixture<PurReturnItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
