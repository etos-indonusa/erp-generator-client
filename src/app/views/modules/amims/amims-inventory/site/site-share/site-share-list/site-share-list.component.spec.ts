import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteShareListComponent } from './site-share-list.component';

describe('SiteShareListComponent', () => {
  let component: SiteShareListComponent;
  let fixture: ComponentFixture<SiteShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
