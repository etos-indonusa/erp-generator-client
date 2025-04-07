import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractShareDetailComponent } from './contract-share-detail.component.ts.ejs';

describe('ContractShareDetailComponent', () => {
  let component: ContractShareDetailComponent;
  let fixture: ComponentFixture<ContractShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
