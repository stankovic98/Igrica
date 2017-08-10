import { Component, OnInit, AfterContentInit, ElementRef, ViewContainerRef, ComponentRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { GuardService } from './../shared/guard.service';

@Component({

    template: '<app-navbar #parent></app-navbar><div></div>'

})

export class GameComponent implements OnInit {

    trajanjeIgre: number = 3;
    ticks: number = 0;
    bodovi: number = 0;
    private subscription: Subscription;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private _router: Router, private _guard: GuardService) {
    }

    ngOnInit() {
        this.addElement();
        let timer = Observable.timer(0, 1000);
        this.subscription = timer.subscribe(t => {
            this.timerZaIgru(this.trajanjeIgre, t);
        });
    }

    timerZaIgru(trajanjeIgre: number, start: number): void {
        this.addElement();
        if (start > trajanjeIgre) {
            //alert("game over");
            this.prekidIgre();
        }

    }

    prekidIgre(): void {
        this.subscription.unsubscribe();
        this._guard.gameOver = false;
        this._router.navigate(['/highscore/']);
    }


    @ViewChild('parent', { read: ViewContainerRef }) target: ViewContainerRef;
    private componentRef: ComponentRef<any>;



    addElement() {
        let childComponent = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
        this.componentRef = this.target.createComponent(childComponent);

    }

}