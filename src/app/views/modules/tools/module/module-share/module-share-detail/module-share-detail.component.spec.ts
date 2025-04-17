import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleShareDetailComponent } from './module-share-detail.component';

describe('ModuleShareDetailComponent', () => {
  let component: ModuleShareDetailComponent;
  let fixture: ComponentFixture<ModuleShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
