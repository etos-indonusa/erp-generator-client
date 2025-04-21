import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnShareDetailComponent } from './pur-return-share-detail.component';

describe('PurReturnShareDetailComponent', () => {
  let component: PurReturnShareDetailComponent;
  let fixture: ComponentFixture<PurReturnShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
