import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineCheckShareHeaderComponent } from './tech-log-engine-check-share-header.component';

describe('TechLogEngineCheckShareHeaderComponent', () => {
  let component: TechLogEngineCheckShareHeaderComponent;
  let fixture: ComponentFixture<TechLogEngineCheckShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineCheckShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineCheckShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
