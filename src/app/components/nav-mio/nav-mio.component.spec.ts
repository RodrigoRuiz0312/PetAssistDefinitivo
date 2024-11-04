import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMIOComponent } from './nav-mio.component';

describe('NavMIOComponent', () => {
  let component: NavMIOComponent;
  let fixture: ComponentFixture<NavMIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMIOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
