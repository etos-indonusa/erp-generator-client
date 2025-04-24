import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrListComponent } from './engineer-pmtr-list.component';

describe('EngineerPmtrListComponent', () => {
  let component: EngineerPmtrListComponent;
  let fixture: ComponentFixture<EngineerPmtrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
