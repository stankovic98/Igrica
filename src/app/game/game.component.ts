import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs';

import { ItemComponent } from './item/item.component';

@Component({
    template: '<app-navbar [bodovi]=bodovi></app-navbar><div><app-item></app-item></div>',
    styles: ['div {height: 85vh; width: 95vw; }']
})

export class GameComponent implements OnInit {
    trajanjeIgre: number = 3;
    ticks: number = 0;
    bodovi: number = 0;
    private subscription: Subscription;

    ngOnInit() {
        let timer = Observable.timer(0, 1000);
        this.subscription = timer.subscribe(t => {
            this.timerZaIgru(this.trajanjeIgre, t);
        });
    }

    timerZaIgru(trajanjeIgre: number, start: number): void {
        if (start > trajanjeIgre) {
            alert("game over");
            this.prekidIgre();
        }

    }
    
    prekidIgre(): void {
        this.subscription.unsubscribe();
    }

    // createItem(): void {
    //     this.html = document.createElement('app-item');
    //     document.getElementsByTagName('div')[0].appendChild(this.html);
    // }
}