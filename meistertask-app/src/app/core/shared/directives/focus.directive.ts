import {
    Input,
    ElementRef,
    OnChanges,
    OnInit
} from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector: '[focus]'
})
export class FocusDirective implements OnInit, OnChanges {
    @Input() focus: boolean = true;

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.focus();
    }

    ngOnChanges() {
        if (this.focus) {
            this.elementRef.nativeElement.focus();
        }
    }

}
