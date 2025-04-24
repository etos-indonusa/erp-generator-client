import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnItemShareDetailComponent } from './internal-grn-item-share-detail.component';

describe('InternalGrnItemShareDetailComponent', () => {
  let component: InternalGrnItemShareDetailComponent;
  let fixture: ComponentFixture<InternalGrnItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
