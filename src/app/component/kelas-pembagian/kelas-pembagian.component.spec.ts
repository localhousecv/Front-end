import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelasPembagianComponent } from './kelas-pembagian.component';

describe('KelasPembagianComponent', () => {
  let component: KelasPembagianComponent;
  let fixture: ComponentFixture<KelasPembagianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelasPembagianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelasPembagianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
