import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroItemShareAddComponent } from './mpc-piro-item-share-add.component';

describe('MpcPiroItemShareAddComponent', () => {
  let component: MpcPiroItemShareAddComponent;
  let fixture: ComponentFixture<MpcPiroItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
