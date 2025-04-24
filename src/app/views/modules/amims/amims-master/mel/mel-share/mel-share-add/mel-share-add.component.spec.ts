import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelShareAddComponent } from './mel-share-add.component';

describe('MelShareAddComponent', () => {
  let component: MelShareAddComponent;
  let fixture: ComponentFixture<MelShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MelShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
