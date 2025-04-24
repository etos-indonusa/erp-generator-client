import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnItemShareHeaderComponent } from './internal-grn-item-share-header.component';

describe('InternalGrnItemShareHeaderComponent', () => {
  let component: InternalGrnItemShareHeaderComponent;
  let fixture: ComponentFixture<InternalGrnItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
