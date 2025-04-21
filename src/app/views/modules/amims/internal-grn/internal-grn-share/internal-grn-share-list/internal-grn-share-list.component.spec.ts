import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnShareListComponent } from './internal-grn-share-list.component';

describe('InternalGrnShareListComponent', () => {
  let component: InternalGrnShareListComponent;
  let fixture: ComponentFixture<InternalGrnShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
