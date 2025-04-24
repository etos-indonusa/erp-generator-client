import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinShareListComponent } from './bin-share-list.component';

describe('BinShareListComponent', () => {
  let component: BinShareListComponent;
  let fixture: ComponentFixture<BinShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BinShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
