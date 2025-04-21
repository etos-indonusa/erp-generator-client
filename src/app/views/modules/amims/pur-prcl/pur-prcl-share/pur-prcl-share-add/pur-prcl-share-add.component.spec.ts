import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrclShareAddComponent } from './pur-prcl-share-add.component';

describe('PurPrclShareAddComponent', () => {
  let component: PurPrclShareAddComponent;
  let fixture: ComponentFixture<PurPrclShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrclShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrclShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
