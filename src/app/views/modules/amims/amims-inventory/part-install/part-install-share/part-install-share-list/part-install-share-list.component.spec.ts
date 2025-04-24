import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallShareListComponent } from './part-install-share-list.component';

describe('PartInstallShareListComponent', () => {
  let component: PartInstallShareListComponent;
  let fixture: ComponentFixture<PartInstallShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
