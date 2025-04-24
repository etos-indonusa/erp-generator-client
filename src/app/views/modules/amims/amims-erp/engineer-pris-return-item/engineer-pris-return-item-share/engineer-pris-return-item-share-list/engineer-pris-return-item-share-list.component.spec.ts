import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnItemShareListComponent } from './engineer-pris-return-item-share-list.component';

describe('EngineerPrisReturnItemShareListComponent', () => {
  let component: EngineerPrisReturnItemShareListComponent;
  let fixture: ComponentFixture<EngineerPrisReturnItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
