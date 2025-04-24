import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartInstallShareWidgetComponent } from './part-install-share-widget.component';

describe('PartInstallShareWidgetComponent', () => {
  let component: PartInstallShareWidgetComponent;
  let fixture: ComponentFixture<PartInstallShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartInstallShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartInstallShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
