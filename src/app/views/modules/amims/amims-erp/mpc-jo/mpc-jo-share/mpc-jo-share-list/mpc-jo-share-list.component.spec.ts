import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoShareListComponent } from './mpc-jo-share-list.component';

describe('MpcJoShareListComponent', () => {
  let component: MpcJoShareListComponent;
  let fixture: ComponentFixture<MpcJoShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
