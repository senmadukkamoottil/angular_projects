import { Component, OnChanges, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number; 
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        //throw new Error("Method not implemented.");
        this.starWidth = this.rating * 86/5;
    }   

    onClick(): void{
        this.ratingClicked.emit(this.rating+"rating clicked");
    }
}