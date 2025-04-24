import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnShareAddComponent } from './engineer-pris-return-share-add.component';

describe('EngineerPrisReturnShareAddComponent', () => {
  let component: EngineerPrisReturnShareAddComponent;
  let fixture: ComponentFixture<EngineerPrisReturnShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
