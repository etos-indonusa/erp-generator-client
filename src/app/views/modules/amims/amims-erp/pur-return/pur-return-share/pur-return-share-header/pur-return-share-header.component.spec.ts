import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnShareHeaderComponent } from './pur-return-share-header.component';

describe('PurReturnShareHeaderComponent', () => {
  let component: PurReturnShareHeaderComponent;
  let fixture: ComponentFixture<PurReturnShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
