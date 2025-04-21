import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnListComponent } from './internal-grn-list.component';

describe('InternalGrnListComponent', () => {
  let component: InternalGrnListComponent;
  let fixture: ComponentFixture<InternalGrnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
