import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallOldShareDetailComponent } from './part-install-old-share-detail.component';

describe('PartInstallOldShareDetailComponent', () => {
  let component: PartInstallOldShareDetailComponent;
  let fixture: ComponentFixture<PartInstallOldShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallOldShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallOldShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
