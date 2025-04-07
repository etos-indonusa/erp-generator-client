import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSiteShareHeaderComponent } from './contract-site-share-header.component.ts.ejs';

describe('ContractSiteShareHeaderComponent', () => {
  let component: ContractSiteShareHeaderComponent;
  let fixture: ComponentFixture<ContractSiteShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractSiteShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSiteShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
