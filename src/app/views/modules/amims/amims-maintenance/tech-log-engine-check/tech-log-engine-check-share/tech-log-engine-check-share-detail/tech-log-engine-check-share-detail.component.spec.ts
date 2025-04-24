import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineCheckShareDetailComponent } from './tech-log-engine-check-share-detail.component';

describe('TechLogEngineCheckShareDetailComponent', () => {
  let component: TechLogEngineCheckShareDetailComponent;
  let fixture: ComponentFixture<TechLogEngineCheckShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineCheckShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineCheckShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
