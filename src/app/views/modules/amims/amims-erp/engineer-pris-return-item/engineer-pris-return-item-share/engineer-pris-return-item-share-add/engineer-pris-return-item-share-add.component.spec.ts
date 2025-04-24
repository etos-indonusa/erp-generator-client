import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnItemShareAddComponent } from './engineer-pris-return-item-share-add.component';

describe('EngineerPrisReturnItemShareAddComponent', () => {
  let component: EngineerPrisReturnItemShareAddComponent;
  let fixture: ComponentFixture<EngineerPrisReturnItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
