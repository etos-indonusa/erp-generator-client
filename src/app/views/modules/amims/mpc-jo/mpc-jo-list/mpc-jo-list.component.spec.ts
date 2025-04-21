import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoListComponent } from './mpc-jo-list.component';

describe('MpcJoListComponent', () => {
  let component: MpcJoListComponent;
  let fixture: ComponentFixture<MpcJoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
