import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroItemListComponent } from './mpc-piro-item-list.component';

describe('MpcPiroItemListComponent', () => {
  let component: MpcPiroItemListComponent;
  let fixture: ComponentFixture<MpcPiroItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
