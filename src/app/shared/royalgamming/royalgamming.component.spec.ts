import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalgammingComponent } from './royalgamming.component';

describe('RoyalgammingComponent', () => {
  let component: RoyalgammingComponent;
  let fixture: ComponentFixture<RoyalgammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoyalgammingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoyalgammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
