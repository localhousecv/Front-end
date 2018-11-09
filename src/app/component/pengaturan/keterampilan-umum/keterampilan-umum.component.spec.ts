import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeterampilanUmumComponent } from './keterampilan-umum.component';

describe('KeterampilanUmumComponent', () => {
  let component: KeterampilanUmumComponent;
  let fixture: ComponentFixture<KeterampilanUmumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeterampilanUmumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeterampilanUmumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
