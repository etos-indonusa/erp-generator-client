import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnListComponent } from './pur-grn-list.component';

describe('PurGrnListComponent', () => {
  let component: PurGrnListComponent;
  let fixture: ComponentFixture<PurGrnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
