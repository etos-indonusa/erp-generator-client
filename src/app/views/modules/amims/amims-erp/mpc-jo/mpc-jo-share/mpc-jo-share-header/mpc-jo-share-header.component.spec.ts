import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoShareHeaderComponent } from './mpc-jo-share-header.component';

describe('MpcJoShareHeaderComponent', () => {
  let component: MpcJoShareHeaderComponent;
  let fixture: ComponentFixture<MpcJoShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
