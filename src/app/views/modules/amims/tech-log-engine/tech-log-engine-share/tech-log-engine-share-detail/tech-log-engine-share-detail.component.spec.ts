import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineShareDetailComponent } from './tech-log-engine-share-detail.component';

describe('TechLogEngineShareDetailComponent', () => {
  let component: TechLogEngineShareDetailComponent;
  let fixture: ComponentFixture<TechLogEngineShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
