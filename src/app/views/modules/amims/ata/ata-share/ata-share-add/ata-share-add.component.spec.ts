import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaShareAddComponent } from './ata-share-add.component';

describe('AtaShareAddComponent', () => {
  let component: AtaShareAddComponent;
  let fixture: ComponentFixture<AtaShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtaShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtaShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
