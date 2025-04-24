import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisItemShareDetailComponent } from './engineer-pris-item-share-detail.component';

describe('EngineerPrisItemShareDetailComponent', () => {
  let component: EngineerPrisItemShareDetailComponent;
  let fixture: ComponentFixture<EngineerPrisItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
