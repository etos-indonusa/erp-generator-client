import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallOldShareAddComponent } from './part-install-old-share-add.component';

describe('PartInstallOldShareAddComponent', () => {
  let component: PartInstallOldShareAddComponent;
  let fixture: ComponentFixture<PartInstallOldShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallOldShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallOldShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
