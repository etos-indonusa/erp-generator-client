import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnShareHeaderComponent } from './pur-grn-share-header.component';

describe('PurGrnShareHeaderComponent', () => {
  let component: PurGrnShareHeaderComponent;
  let fixture: ComponentFixture<PurGrnShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
