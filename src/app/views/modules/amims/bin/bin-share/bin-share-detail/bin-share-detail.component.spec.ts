import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinShareDetailComponent } from './bin-share-detail.component';

describe('BinShareDetailComponent', () => {
  let component: BinShareDetailComponent;
  let fixture: ComponentFixture<BinShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BinShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
