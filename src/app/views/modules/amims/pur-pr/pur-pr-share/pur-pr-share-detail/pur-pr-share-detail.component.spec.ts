import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrShareDetailComponent } from './pur-pr-share-detail.component';

describe('PurPrShareDetailComponent', () => {
  let component: PurPrShareDetailComponent;
  let fixture: ComponentFixture<PurPrShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPrShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
