import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnShareAddComponent } from './pur-return-share-add.component';

describe('PurReturnShareAddComponent', () => {
  let component: PurReturnShareAddComponent;
  let fixture: ComponentFixture<PurReturnShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
