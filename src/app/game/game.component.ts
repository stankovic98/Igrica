import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template:'<h1>Helo</h1><app-navbar></app-navbar>'
})

export class GameComponent {
    constructor(private _route: ActivatedRoute) {
        console.log(this._route.snapshot.params['nickname']);
    }
}