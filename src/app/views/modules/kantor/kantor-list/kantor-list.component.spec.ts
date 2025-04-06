import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantorListComponent } from './kantor-list.component';

describe('KantorListComponent', () => {
  let component: KantorListComponent;
  let fixture: ComponentFixture<KantorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KantorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
