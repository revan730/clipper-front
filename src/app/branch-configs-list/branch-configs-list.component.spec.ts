import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchConfigsListComponent } from './branch-configs-list.component';

describe('BranchConfigsListComponent', () => {
  let component: BranchConfigsListComponent;
  let fixture: ComponentFixture<BranchConfigsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchConfigsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchConfigsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
