import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroListComponent } from './mpc-piro-list.component';

describe('MpcPiroListComponent', () => {
  let component: MpcPiroListComponent;
  let fixture: ComponentFixture<MpcPiroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
