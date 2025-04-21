import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineCheckShareAddComponent } from './tech-log-engine-check-share-add.component';

describe('TechLogEngineCheckShareAddComponent', () => {
  let component: TechLogEngineCheckShareAddComponent;
  let fixture: ComponentFixture<TechLogEngineCheckShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineCheckShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineCheckShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
