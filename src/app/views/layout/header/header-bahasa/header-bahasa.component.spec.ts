import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBahasaComponent } from './header-bahasa.component';

describe('HeaderBahasaComponent', () => {
  let component: HeaderBahasaComponent;
  let fixture: ComponentFixture<HeaderBahasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBahasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBahasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
