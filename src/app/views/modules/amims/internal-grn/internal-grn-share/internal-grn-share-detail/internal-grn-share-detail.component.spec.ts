import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnShareDetailComponent } from './internal-grn-share-detail.component';

describe('InternalGrnShareDetailComponent', () => {
  let component: InternalGrnShareDetailComponent;
  let fixture: ComponentFixture<InternalGrnShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
