import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredikatMataPelajaranComponent } from './predikat-mata-pelajaran.component';

describe('PredikatMataPelajaranComponent', () => {
  let component: PredikatMataPelajaranComponent;
  let fixture: ComponentFixture<PredikatMataPelajaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredikatMataPelajaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredikatMataPelajaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
