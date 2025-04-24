import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnShareDetailComponent } from './pur-grn-share-detail.component';

describe('PurGrnShareDetailComponent', () => {
  let component: PurGrnShareDetailComponent;
  let fixture: ComponentFixture<PurGrnShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
