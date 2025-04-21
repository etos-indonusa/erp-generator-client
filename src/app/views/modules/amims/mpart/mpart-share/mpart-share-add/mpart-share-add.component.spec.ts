import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartShareAddComponent } from './mpart-share-add.component';

describe('MpartShareAddComponent', () => {
  let component: MpartShareAddComponent;
  let fixture: ComponentFixture<MpartShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
