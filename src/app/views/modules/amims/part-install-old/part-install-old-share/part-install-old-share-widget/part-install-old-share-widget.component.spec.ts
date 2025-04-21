import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallOldShareWidgetComponent } from './part-install-old-share-widget.component';

describe('PartInstallOldShareWidgetComponent', () => {
  let component: PartInstallOldShareWidgetComponent;
  let fixture: ComponentFixture<PartInstallOldShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallOldShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallOldShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
