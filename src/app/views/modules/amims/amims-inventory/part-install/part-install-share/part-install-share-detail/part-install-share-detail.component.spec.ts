import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallShareDetailComponent } from './part-install-share-detail.component';

describe('PartInstallShareDetailComponent', () => {
  let component: PartInstallShareDetailComponent;
  let fixture: ComponentFixture<PartInstallShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
