import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidShareDetailComponent } from './partid-share-detail.component';

describe('PartidShareDetailComponent', () => {
  let component: PartidShareDetailComponent;
  let fixture: ComponentFixture<PartidShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
