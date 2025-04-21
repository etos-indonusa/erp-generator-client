import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroItemShareHeaderComponent } from './mpc-piro-item-share-header.component';

describe('MpcPiroItemShareHeaderComponent', () => {
  let component: MpcPiroItemShareHeaderComponent;
  let fixture: ComponentFixture<MpcPiroItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
