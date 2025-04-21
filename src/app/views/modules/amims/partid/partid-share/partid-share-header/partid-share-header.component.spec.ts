import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidShareHeaderComponent } from './partid-share-header.component';

describe('PartidShareHeaderComponent', () => {
  let component: PartidShareHeaderComponent;
  let fixture: ComponentFixture<PartidShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
