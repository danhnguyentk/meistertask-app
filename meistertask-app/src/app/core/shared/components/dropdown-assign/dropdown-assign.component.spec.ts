import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { DropdownAssignComponent } from './dropdown-assign.component';

describe('DropdownAssignComponent', () => {
    let component: DropdownAssignComponent;
    let fixture: ComponentFixture<DropdownAssignComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [ DropdownAssignComponent ]
      })
      .compileComponents();
  }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownAssignComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
   });
});
