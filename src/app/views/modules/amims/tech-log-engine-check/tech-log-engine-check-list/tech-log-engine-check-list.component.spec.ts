import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineCheckListComponent } from './tech-log-engine-check-list.component';

describe('TechLogEngineCheckListComponent', () => {
  let component: TechLogEngineCheckListComponent;
  let fixture: ComponentFixture<TechLogEngineCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineCheckListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
