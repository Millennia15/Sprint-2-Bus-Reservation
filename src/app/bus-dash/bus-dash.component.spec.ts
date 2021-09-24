import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDashComponent } from './bus-dash.component';

describe('BusDashComponent', () => {
  let component: BusDashComponent;
  let fixture: ComponentFixture<BusDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
