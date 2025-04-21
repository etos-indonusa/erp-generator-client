import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidListComponent } from './partid-list.component';

describe('PartidListComponent', () => {
  let component: PartidListComponent;
  let fixture: ComponentFixture<PartidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
