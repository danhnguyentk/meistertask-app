import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { FourthLayoutComponent } from './fourth-layout.component';

describe('FourthLayoutComponent', () => {
    let component: FourthLayoutComponent;
    let fixture: ComponentFixture<FourthLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FourthLayoutComponent ] 
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FourthLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
