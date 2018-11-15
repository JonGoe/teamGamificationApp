import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { TimeFilter } from '../../../enum/TimeFilter';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    $: any;
    faCalendarAlt = faCalendarAlt;

    @Input() activeFilter: TimeFilter;

    @Output() filterChanged = new EventEmitter();

    constructor() {}

    ngOnInit() {
        // prevent bootstrap dropdown from being closed by clicking on its content
        // this.$(document).on('click', '#filter-dropdown', function (e) {
        //    e.stopPropagation();
        // });
    }

    openFilterDropdown() {
        document.getElementById('filter-dropdown').classList.toggle('show');
    }

    changeTimeFilter(value: TimeFilter) {
        this.filterChanged.emit(value);
    }
}
