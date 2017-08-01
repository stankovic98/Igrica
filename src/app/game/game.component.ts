import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template:'<app-navbar></app-navbar><div></div>',
    styles: ['div {height: 85vh; width: 95vw; }']
})

export class GameComponent {
    constructor(private _route: ActivatedRoute) {
        console.log(this._route.snapshot.params['nickname']);
    }
}