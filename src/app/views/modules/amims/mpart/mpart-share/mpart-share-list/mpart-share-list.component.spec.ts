import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartShareListComponent } from './mpart-share-list.component';

describe('MpartShareListComponent', () => {
  let component: MpartShareListComponent;
  let fixture: ComponentFixture<MpartShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
