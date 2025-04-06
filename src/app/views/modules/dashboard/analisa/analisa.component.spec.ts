import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisaComponent } from './analisa.component';

describe('AnalisaComponent', () => {
  let component: AnalisaComponent;
  let fixture: ComponentFixture<AnalisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
