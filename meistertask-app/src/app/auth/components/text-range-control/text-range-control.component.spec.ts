import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { TextRangeControlComponent } from './text-range-control.component';

describe('TextRangeControlComponent', () => {
    let component: TextRangeControlComponent;
    let fixture: ComponentFixture<TextRangeControlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TextRangeControlComponent ]
        }).compileComponents();
            
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TextRangeControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
