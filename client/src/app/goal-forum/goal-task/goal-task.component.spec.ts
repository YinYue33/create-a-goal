import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalTaskComponent } from './goal-task.component';

describe('GoalTaskComponent', () => {
  let component: GoalTaskComponent;
  let fixture: ComponentFixture<GoalTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
