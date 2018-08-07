import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalForumComponent } from './goal-forum.component';

describe('GoalForumComponent', () => {
  let component: GoalForumComponent;
  let fixture: ComponentFixture<GoalForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
