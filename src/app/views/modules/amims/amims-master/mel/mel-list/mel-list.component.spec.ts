import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelListComponent } from './mel-list.component';

describe('MelListComponent', () => {
  let component: MelListComponent;
  let fixture: ComponentFixture<MelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MelListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
