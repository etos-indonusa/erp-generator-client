import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractShareListComponent } from './contract-share-list.component.ts.ejs';

describe('ContractShareListComponent', () => {
  let component: ContractShareListComponent;
  let fixture: ComponentFixture<ContractShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
