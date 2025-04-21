import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallOldListComponent } from './part-install-old-list.component';

describe('PartInstallOldListComponent', () => {
  let component: PartInstallOldListComponent;
  let fixture: ComponentFixture<PartInstallOldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallOldListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallOldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
