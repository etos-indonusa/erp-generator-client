import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinShareHeaderComponent } from './bin-share-header.component';

describe('BinShareHeaderComponent', () => {
  let component: BinShareHeaderComponent;
  let fixture: ComponentFixture<BinShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BinShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
