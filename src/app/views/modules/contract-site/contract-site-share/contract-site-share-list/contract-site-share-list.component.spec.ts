import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSiteShareListComponent } from './contract-site-share-list.component.ts.ejs';

describe('ContractSiteShareListComponent', () => {
  let component: ContractSiteShareListComponent;
  let fixture: ComponentFixture<ContractSiteShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractSiteShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSiteShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
