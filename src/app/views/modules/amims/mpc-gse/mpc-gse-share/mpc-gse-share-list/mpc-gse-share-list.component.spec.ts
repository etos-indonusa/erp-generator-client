import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcGseShareListComponent } from './mpc-gse-share-list.component';

describe('MpcGseShareListComponent', () => {
  let component: MpcGseShareListComponent;
  let fixture: ComponentFixture<MpcGseShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcGseShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcGseShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
