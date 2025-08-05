import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDueListOutputShareWidgetComponent } from './v-due-list-output-share-widget.component';

describe('VDueListOutputShareWidgetComponent', () => {
  let component: VDueListOutputShareWidgetComponent;
  let fixture: ComponentFixture<VDueListOutputShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VDueListOutputShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VDueListOutputShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
