import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnShareListComponent } from './engineer-pris-return-share-list.component';

describe('EngineerPrisReturnShareListComponent', () => {
  let component: EngineerPrisReturnShareListComponent;
  let fixture: ComponentFixture<EngineerPrisReturnShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
