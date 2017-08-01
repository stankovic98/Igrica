import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl:'./navbar.template.html'
})

export class NavbarComponent {
    nickname: string;
    @Input() bodovi: number;

    constructor(private _route: ActivatedRoute) {
        console.log(this._route.snapshot.params['nickname']);
        this.nickname = this._route.snapshot.params['nickname'];
    }
}