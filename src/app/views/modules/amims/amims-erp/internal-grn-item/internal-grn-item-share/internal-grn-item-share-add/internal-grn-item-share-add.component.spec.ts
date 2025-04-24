import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnItemShareAddComponent } from './internal-grn-item-share-add.component';

describe('InternalGrnItemShareAddComponent', () => {
  let component: InternalGrnItemShareAddComponent;
  let fixture: ComponentFixture<InternalGrnItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
