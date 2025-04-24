import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallShareAddComponent } from './part-install-share-add.component';

describe('PartInstallShareAddComponent', () => {
  let component: PartInstallShareAddComponent;
  let fixture: ComponentFixture<PartInstallShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
