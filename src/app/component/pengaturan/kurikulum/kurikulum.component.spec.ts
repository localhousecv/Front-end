import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurikulumComponent } from './kurikulum.component';

describe('KurikulumComponent', () => {
  let component: KurikulumComponent;
  let fixture: ComponentFixture<KurikulumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurikulumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurikulumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
