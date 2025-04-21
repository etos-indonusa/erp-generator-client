import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallListComponent } from './part-install-list.component';

describe('PartInstallListComponent', () => {
  let component: PartInstallListComponent;
  let fixture: ComponentFixture<PartInstallListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
