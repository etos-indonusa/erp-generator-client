import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidShareListComponent } from './partid-share-list.component';

describe('PartidShareListComponent', () => {
  let component: PartidShareListComponent;
  let fixture: ComponentFixture<PartidShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
