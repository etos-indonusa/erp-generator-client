import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantorShareAddComponent } from './kantor-share-add.component';

describe('KantorShareAddComponent', () => {
  let component: KantorShareAddComponent;
  let fixture: ComponentFixture<KantorShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KantorShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantorShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
