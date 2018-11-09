import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MataPelajaranKelasComponent } from './mata-pelajaran-kelas.component';

describe('MataPelajaranKelasComponent', () => {
  let component: MataPelajaranKelasComponent;
  let fixture: ComponentFixture<MataPelajaranKelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MataPelajaranKelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MataPelajaranKelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
