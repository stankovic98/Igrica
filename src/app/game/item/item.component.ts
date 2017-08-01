import { Component } from '@angular/core';

@Component({
    selector: 'app-item',
    template: '<div></div>',
    styles: ['div {width:100px; height: 200px; background-color: green;} ']
})
export class ItemComponent {
    bodovi: number = 0;
}