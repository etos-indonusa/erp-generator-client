import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnItemShareListComponent } from './internal-grn-item-share-list.component';

describe('InternalGrnItemShareListComponent', () => {
  let component: InternalGrnItemShareListComponent;
  let fixture: ComponentFixture<InternalGrnItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
