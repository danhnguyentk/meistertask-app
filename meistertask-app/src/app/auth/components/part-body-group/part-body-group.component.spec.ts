import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { PartBodyGroupComponent } from './part-body-group.component';

describe('PartBodyGroupComponent', () => {
    let component: PartBodyGroupComponent;
    let fixture: ComponentFixture<PartBodyGroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PartBodyGroupComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PartBodyGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
