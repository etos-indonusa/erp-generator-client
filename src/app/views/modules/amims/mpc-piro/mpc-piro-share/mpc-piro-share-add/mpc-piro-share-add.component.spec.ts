import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroShareAddComponent } from './mpc-piro-share-add.component';

describe('MpcPiroShareAddComponent', () => {
  let component: MpcPiroShareAddComponent;
  let fixture: ComponentFixture<MpcPiroShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
