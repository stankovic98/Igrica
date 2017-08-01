import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-navbar',
    template:'<h1>{{ nickname }}</h1>'
})

export class NavbarComponent {
    nickname: string;

    constructor(private _route: ActivatedRoute) {
        console.log(this._route.snapshot.params['nickname']);
        this.nickname = this._route.snapshot.params['nickname'];
    }
}