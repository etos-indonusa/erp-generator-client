import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroItemShareListComponent } from './mpc-piro-item-share-list.component';

describe('MpcPiroItemShareListComponent', () => {
  let component: MpcPiroItemShareListComponent;
  let fixture: ComponentFixture<MpcPiroItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
