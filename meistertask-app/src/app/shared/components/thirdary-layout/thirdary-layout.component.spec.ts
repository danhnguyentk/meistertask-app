import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { ThirdaryLayoutComponent } from './thirdary-layout.component';

describe('ThirdaryLayoutComponent', () => {
    let component: ThirdaryLayoutComponent;
    let fixture: ComponentFixture<ThirdaryLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ThirdaryLayoutComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ThirdaryLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
