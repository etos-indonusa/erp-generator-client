import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinShareAddComponent } from './bin-share-add.component';

describe('BinShareAddComponent', () => {
  let component: BinShareAddComponent;
  let fixture: ComponentFixture<BinShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BinShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
