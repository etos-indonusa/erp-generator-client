import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogItemShareAddComponent } from './tech-log-item-share-add.component';

describe('TechLogItemShareAddComponent', () => {
  let component: TechLogItemShareAddComponent;
  let fixture: ComponentFixture<TechLogItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
