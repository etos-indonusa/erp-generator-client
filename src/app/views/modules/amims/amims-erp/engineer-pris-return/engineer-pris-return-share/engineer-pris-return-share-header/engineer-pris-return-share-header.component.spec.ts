import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnShareHeaderComponent } from './engineer-pris-return-share-header.component';

describe('EngineerPrisReturnShareHeaderComponent', () => {
  let component: EngineerPrisReturnShareHeaderComponent;
  let fixture: ComponentFixture<EngineerPrisReturnShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
