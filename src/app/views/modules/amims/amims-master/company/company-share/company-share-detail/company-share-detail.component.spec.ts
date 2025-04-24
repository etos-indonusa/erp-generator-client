import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyShareDetailComponent } from './company-share-detail.component';

describe('CompanyShareDetailComponent', () => {
  let component: CompanyShareDetailComponent;
  let fixture: ComponentFixture<CompanyShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
