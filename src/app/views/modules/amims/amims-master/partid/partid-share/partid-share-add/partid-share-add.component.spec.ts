import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidShareAddComponent } from './partid-share-add.component';

describe('PartidShareAddComponent', () => {
  let component: PartidShareAddComponent;
  let fixture: ComponentFixture<PartidShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
