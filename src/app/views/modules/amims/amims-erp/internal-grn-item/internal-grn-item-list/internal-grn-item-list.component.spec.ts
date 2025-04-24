import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnItemListComponent } from './internal-grn-item-list.component';

describe('InternalGrnItemListComponent', () => {
  let component: InternalGrnItemListComponent;
  let fixture: ComponentFixture<InternalGrnItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
