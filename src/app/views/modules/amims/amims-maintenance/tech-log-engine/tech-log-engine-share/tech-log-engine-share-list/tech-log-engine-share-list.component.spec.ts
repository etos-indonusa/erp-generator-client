import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineShareListComponent } from './tech-log-engine-share-list.component';

describe('TechLogEngineShareListComponent', () => {
  let component: TechLogEngineShareListComponent;
  let fixture: ComponentFixture<TechLogEngineShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
