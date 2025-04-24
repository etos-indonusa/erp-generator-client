import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrclShareHeaderComponent } from './pur-prcl-share-header.component';

describe('PurPrclShareHeaderComponent', () => {
  let component: PurPrclShareHeaderComponent;
  let fixture: ComponentFixture<PurPrclShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrclShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrclShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
