import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroShareListComponent } from './mpc-piro-share-list.component';

describe('MpcPiroShareListComponent', () => {
  let component: MpcPiroShareListComponent;
  let fixture: ComponentFixture<MpcPiroShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
