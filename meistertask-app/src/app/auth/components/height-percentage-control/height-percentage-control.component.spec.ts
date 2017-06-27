import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { HeightPercentageControlComponent } from './height-percentage-control.component';

describe('HeightPercentageControlComponent', () => {
    let component: HeightPercentageControlComponent;
    let fixture: ComponentFixture<HeightPercentageControlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeightPercentageControlComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeightPercentageControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
