import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ItemComponent } from './item/item.component';

@Component({
    template: '<app-navbar [bodovi]=bodovi></app-navbar><div><app-item></app-item></div>',
    styles: ['div {height: 85vh; width: 95vw; }']
})

export class GameComponent implements OnInit {
    html;
    bodovi: number = 0;

    ngOnInit() {
        let timer = Observable.timer(0, 1000);
        timer.subscribe(this.createItem);
    }

    createItem(): void {
        this.html = document.createElement('app-item');
        document.getElementsByTagName('div')[0].appendChild(this.html);
    }
}