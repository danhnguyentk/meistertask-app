import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input
} from '@angular/core';

@Component({
    selector: 'search-text',
    templateUrl: './search-text.component.html',
    styleUrls: [ './search-text.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchTextComponent implements OnInit {
    textSearch: string;
    @Input() placeholder: string;

    constructor() { }

    ngOnInit() {
    }

    /**
     * Clear search input
     */
    onClearSearch() {
        this.textSearch = '';
    }
}
