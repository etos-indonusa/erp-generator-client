import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyShareAddComponent } from './company-share-add.component';

describe('CompanyShareAddComponent', () => {
  let component: CompanyShareAddComponent;
  let fixture: ComponentFixture<CompanyShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
