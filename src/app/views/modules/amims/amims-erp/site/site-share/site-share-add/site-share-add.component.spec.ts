import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteShareAddComponent } from './site-share-add.component';

describe('SiteShareAddComponent', () => {
  let component: SiteShareAddComponent;
  let fixture: ComponentFixture<SiteShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
