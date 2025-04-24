import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcWpShareListComponent } from './mpc-wp-share-list.component';

describe('MpcWpShareListComponent', () => {
  let component: MpcWpShareListComponent;
  let fixture: ComponentFixture<MpcWpShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcWpShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcWpShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
