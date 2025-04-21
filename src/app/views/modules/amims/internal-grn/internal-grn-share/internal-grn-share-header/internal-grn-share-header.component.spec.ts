import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnShareHeaderComponent } from './internal-grn-share-header.component';

describe('InternalGrnShareHeaderComponent', () => {
  let component: InternalGrnShareHeaderComponent;
  let fixture: ComponentFixture<InternalGrnShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
