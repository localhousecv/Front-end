import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelasMasterComponent } from './kelas-master.component';

describe('KelasMasterComponent', () => {
  let component: KelasMasterComponent;
  let fixture: ComponentFixture<KelasMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelasMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelasMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
