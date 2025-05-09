import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteShareHeaderComponent } from './site-share-header.component';

describe('SiteShareHeaderComponent', () => {
  let component: SiteShareHeaderComponent;
  let fixture: ComponentFixture<SiteShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
