import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleShareAddComponent } from './module-share-add.component';

describe('ModuleShareAddComponent', () => {
  let component: ModuleShareAddComponent;
  let fixture: ComponentFixture<ModuleShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
