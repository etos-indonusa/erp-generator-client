import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnShareDetailComponent } from './engineer-pris-return-share-detail.component';

describe('EngineerPrisReturnShareDetailComponent', () => {
  let component: EngineerPrisReturnShareDetailComponent;
  let fixture: ComponentFixture<EngineerPrisReturnShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
