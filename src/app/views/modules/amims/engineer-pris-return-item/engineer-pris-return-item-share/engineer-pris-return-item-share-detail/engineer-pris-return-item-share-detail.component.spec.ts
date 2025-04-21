import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnItemShareDetailComponent } from './engineer-pris-return-item-share-detail.component';

describe('EngineerPrisReturnItemShareDetailComponent', () => {
  let component: EngineerPrisReturnItemShareDetailComponent;
  let fixture: ComponentFixture<EngineerPrisReturnItemShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnItemShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnItemShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
