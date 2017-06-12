import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { DropdownAddTaskComponent } from './dropdown-add-task.component';

describe('DropdownAddTaskComponent', () => {
    let component: DropdownAddTaskComponent;
    let fixture: ComponentFixture<DropdownAddTaskComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DropdownAddTaskComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownAddTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
