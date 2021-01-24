import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'filter-textbox',
    template: `
        Filter Customers: <input style = "border-radius: 25px; width: 80%; margin-left: 20px" type = 'text' [(ngModel)] = "filter" />
    `
})

export class FilterTextboxComponent implements OnInit {

    private _filter!: string;
    
    @Input() get filter() {
        return this._filter;
    }
    
    set filter(val: string) { 
        this._filter = val;
        this.changed.emit(this.filter);
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();
    
    constructor() {}

    ngOnInit() {
        
    }
}