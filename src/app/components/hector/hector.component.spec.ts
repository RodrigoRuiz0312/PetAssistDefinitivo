import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HectorComponent } from './hector.component';

describe('HectorComponent', () => {
  let component: HectorComponent;
  let fixture: ComponentFixture<HectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
