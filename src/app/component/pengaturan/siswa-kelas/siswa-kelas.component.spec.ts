import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiswaKelasComponent } from './siswa-kelas.component';

describe('SiswaKelasComponent', () => {
  let component: SiswaKelasComponent;
  let fixture: ComponentFixture<SiswaKelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiswaKelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiswaKelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
