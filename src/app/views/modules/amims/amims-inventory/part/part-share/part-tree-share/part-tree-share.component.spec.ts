import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTreeShareComponent } from './part-tree-share.component';

describe('PartTreeShareComponent', () => {
  let component: PartTreeShareComponent;
  let fixture: ComponentFixture<PartTreeShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartTreeShareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartTreeShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
