import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcGseListComponent } from './mpc-gse-list.component';

describe('MpcGseListComponent', () => {
  let component: MpcGseListComponent;
  let fixture: ComponentFixture<MpcGseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcGseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcGseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
