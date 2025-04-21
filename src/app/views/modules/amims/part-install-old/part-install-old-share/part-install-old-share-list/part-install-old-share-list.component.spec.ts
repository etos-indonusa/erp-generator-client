import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallOldShareListComponent } from './part-install-old-share-list.component';

describe('PartInstallOldShareListComponent', () => {
  let component: PartInstallOldShareListComponent;
  let fixture: ComponentFixture<PartInstallOldShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallOldShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallOldShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
