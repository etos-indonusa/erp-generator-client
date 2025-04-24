import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroItemShareDetailComponent } from './mpc-piro-item-share-detail.component';

describe('MpcPiroItemShareDetailComponent', () => {
  let component: MpcPiroItemShareDetailComponent;
  let fixture: ComponentFixture<MpcPiroItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
