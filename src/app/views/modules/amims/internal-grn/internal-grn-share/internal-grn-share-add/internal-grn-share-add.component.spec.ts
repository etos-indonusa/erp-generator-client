import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnShareAddComponent } from './internal-grn-share-add.component';

describe('InternalGrnShareAddComponent', () => {
  let component: InternalGrnShareAddComponent;
  let fixture: ComponentFixture<InternalGrnShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
