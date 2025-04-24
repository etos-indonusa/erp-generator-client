import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnItemListComponent } from './engineer-pris-return-item-list.component';

describe('EngineerPrisReturnItemListComponent', () => {
  let component: EngineerPrisReturnItemListComponent;
  let fixture: ComponentFixture<EngineerPrisReturnItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
