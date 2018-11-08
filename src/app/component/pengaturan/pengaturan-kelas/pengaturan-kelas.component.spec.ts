import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengaturanKelasComponent } from './pengaturan-kelas.component';

describe('PengaturanKelasComponent', () => {
  let component: PengaturanKelasComponent;
  let fixture: ComponentFixture<PengaturanKelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengaturanKelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanKelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
