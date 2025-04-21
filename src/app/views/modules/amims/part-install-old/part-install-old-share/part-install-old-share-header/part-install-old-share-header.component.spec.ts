import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallOldShareHeaderComponent } from './part-install-old-share-header.component';

describe('PartInstallOldShareHeaderComponent', () => {
  let component: PartInstallOldShareHeaderComponent;
  let fixture: ComponentFixture<PartInstallOldShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallOldShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallOldShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
