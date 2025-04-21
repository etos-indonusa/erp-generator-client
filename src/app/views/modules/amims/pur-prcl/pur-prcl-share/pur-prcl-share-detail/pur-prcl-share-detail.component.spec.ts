import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrclShareDetailComponent } from './pur-prcl-share-detail.component';

describe('PurPrclShareDetailComponent', () => {
  let component: PurPrclShareDetailComponent;
  let fixture: ComponentFixture<PurPrclShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrclShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrclShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
