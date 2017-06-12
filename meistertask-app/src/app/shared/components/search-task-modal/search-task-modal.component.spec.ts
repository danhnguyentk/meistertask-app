import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { SearchTaskModalComponent } from './search-task-modal.component';

describe('SearchTaskModalComponent', () => {
    let component: SearchTaskModalComponent;
    let fixture: ComponentFixture<SearchTaskModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchTaskModalComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchTaskModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
