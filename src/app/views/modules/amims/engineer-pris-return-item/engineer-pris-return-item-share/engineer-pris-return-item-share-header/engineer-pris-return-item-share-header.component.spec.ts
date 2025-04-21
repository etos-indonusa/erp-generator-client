import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnItemShareHeaderComponent } from './engineer-pris-return-item-share-header.component';

describe('EngineerPrisReturnItemShareHeaderComponent', () => {
  let component: EngineerPrisReturnItemShareHeaderComponent;
  let fixture: ComponentFixture<EngineerPrisReturnItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
