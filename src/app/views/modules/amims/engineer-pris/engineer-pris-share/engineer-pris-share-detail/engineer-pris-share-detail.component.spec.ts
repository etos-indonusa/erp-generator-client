import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisShareDetailComponent } from './engineer-pris-share-detail.component';

describe('EngineerPrisShareDetailComponent', () => {
  let component: EngineerPrisShareDetailComponent;
  let fixture: ComponentFixture<EngineerPrisShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
