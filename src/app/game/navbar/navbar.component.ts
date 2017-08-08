import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ScoreService } from './../shared/score.service';
@Component({
    selector: 'app-navbar',
    templateUrl:'./navbar.template.html'
})

export class NavbarComponent {
    nickname: string;
    bodovi: number = 0;
    subscription: Subscription;

    constructor(private _route: ActivatedRoute, private _score: ScoreService) {
        console.log(this._route.snapshot.params['nickname']);
        this.nickname = this._route.snapshot.params['nickname'];

        this.subscription = this._score.getScore().subscribe(score => {
            this.bodovi = score.score;
        });
    }
}