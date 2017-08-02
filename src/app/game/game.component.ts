import { Component, OnInit, AfterContentInit, ElementRef, ViewContainerRef, ComponentRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs';

import { ItemComponent } from './item/item.component';

@Component({
    
    template: '<app-navbar [bodovi]=bodovi #parent></app-navbar><div></div>',
    styles: ['div {height: 85vh; width: 95vw; }'],

})

export class GameComponent implements OnInit {

    trajanjeIgre: number = 3;
    ticks: number = 0;
    bodovi: number = 0;
    private subscription: Subscription;


    ngOnInit() {
        this.addElement();
        let timer = Observable.timer(0, 1000);
        this.subscription = timer.subscribe(t => {
            this.timerZaIgru(this.trajanjeIgre, t);
        });
    }

    timerZaIgru(trajanjeIgre: number, start: number): void {
        if (start > trajanjeIgre) {
            //alert("game over");
            this.prekidIgre();
        }

    }

    prekidIgre(): void {
        this.subscription.unsubscribe();
    }


    @ViewChild('parent', { read: ViewContainerRef }) target: ViewContainerRef;
    private componentRef: ComponentRef<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    addElement() {
        let childComponent = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
        this.componentRef = this.target.createComponent(childComponent);
        
    }

}