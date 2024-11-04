import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EJEMPLOComponent } from './ejemplo.component';

describe('EJEMPLOComponent', () => {
  let component: EJEMPLOComponent;
  let fixture: ComponentFixture<EJEMPLOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EJEMPLOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EJEMPLOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
