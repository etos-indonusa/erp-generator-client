import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteShareDetailComponent } from './site-share-detail.component';

describe('SiteShareDetailComponent', () => {
  let component: SiteShareDetailComponent;
  let fixture: ComponentFixture<SiteShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
