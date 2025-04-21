import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallShareHeaderComponent } from './part-install-share-header.component';

describe('PartInstallShareHeaderComponent', () => {
  let component: PartInstallShareHeaderComponent;
  let fixture: ComponentFixture<PartInstallShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
