import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelasPerwalianComponent } from './kelas-perwalian.component';

describe('KelasPerwalianComponent', () => {
  let component: KelasPerwalianComponent;
  let fixture: ComponentFixture<KelasPerwalianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelasPerwalianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelasPerwalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
