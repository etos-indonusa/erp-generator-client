import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnShareListComponent } from './pur-return-share-list.component';

describe('PurReturnShareListComponent', () => {
  let component: PurReturnShareListComponent;
  let fixture: ComponentFixture<PurReturnShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
