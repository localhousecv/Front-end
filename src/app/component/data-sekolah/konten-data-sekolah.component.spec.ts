import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontenDataSekolahComponent } from './konten-data-sekolah.component';

describe('KontenDataSekolahComponent', () => {
  let component: KontenDataSekolahComponent;
  let fixture: ComponentFixture<KontenDataSekolahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontenDataSekolahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontenDataSekolahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
