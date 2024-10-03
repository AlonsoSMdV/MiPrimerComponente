import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeopleCounterComponent } from './people-counter.component';

describe('PeopleCounterComponent', () => {
  let component: PeopleCounterComponent;
  let fixture: ComponentFixture<PeopleCounterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PeopleCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
