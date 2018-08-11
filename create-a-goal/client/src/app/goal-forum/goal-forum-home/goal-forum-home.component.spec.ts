import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalForumHomeComponent } from './goal-forum-home.component';

describe('GoalForumHomeComponent', () => {
  let component: GoalForumHomeComponent;
  let fixture: ComponentFixture<GoalForumHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalForumHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalForumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
