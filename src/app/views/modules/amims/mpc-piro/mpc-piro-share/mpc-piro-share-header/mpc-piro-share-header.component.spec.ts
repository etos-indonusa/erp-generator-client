import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroShareHeaderComponent } from './mpc-piro-share-header.component';

describe('MpcPiroShareHeaderComponent', () => {
  let component: MpcPiroShareHeaderComponent;
  let fixture: ComponentFixture<MpcPiroShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
