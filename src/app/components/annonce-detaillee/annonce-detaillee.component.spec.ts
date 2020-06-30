import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceDetailleeComponent } from './annonce-detaillee.component';

describe('AnnonceDetailleeComponent', () => {
  let component: AnnonceDetailleeComponent;
  let fixture: ComponentFixture<AnnonceDetailleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceDetailleeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceDetailleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
